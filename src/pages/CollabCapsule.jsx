"use client"; // Required for React 19's new rendering model

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

const initialFamilyData = [
  { id: 1, name: "Grandfather", position: [0, 2, 0], children: [2, 3], spouseId: 6, image: "https://via.placeholder.com/100" },
  { id: 6, name: "Grandmother", position: [0.5, 2, 0], children: [2, 3], spouseId: 1, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Father", position: [-1, 0, 0], children: [4, 5], spouseId: 7, image: "https://via.placeholder.com/100" },
  { id: 7, name: "Mother", position: [-0.5, 0, 0], children: [4, 5], spouseId: 2, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Uncle", position: [1, 0, 0], children: [], image: "https://via.placeholder.com/100" },
  { id: 4, name: "You", position: [-1.5, -2, 0], children: [], image: "https://via.placeholder.com/100" },
  { id: 5, name: "Sibling", position: [-0.5, -2, 0], children: [], image: "https://via.placeholder.com/100" }
];

function FamilyNode({ member, onClick }) {
  return (
    <>
      <mesh position={member.position} onClick={() => onClick(member)}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="magenta" emissive="purple" emissiveIntensity={0.5} />
      </mesh>
      <Html position={member.position} center>
        <div style={{ color: "white", background: "black", padding: "4px", borderRadius: "4px" }}>
          {member.name}
        </div>
      </Html>
    </>
  );
}

export default function FamilyTree() {
  const [familyData, setFamilyData] = useState(initialFamilyData);
  const [selected, setSelected] = useState(null);
  const [newName, setNewName] = useState("");
  const [newParentId, setNewParentId] = useState(1);
  const [isSpouse, setIsSpouse] = useState(false);
  const cameraRef = useRef();
  const controlsRef = useRef();

  const handleNodeClick = (member) => {
    setSelected(member);
  };

  const addFamilyMember = () => {
    if (!newName.trim()) return;
    const newId = familyData.length + 1;
    const parent = familyData.find((m) => m.id === newParentId);

    let newPosition = [0, 0, 0];
    if (isSpouse) {
      newPosition = [parent.position[0] + 0.5, parent.position[1], parent.position[2]];
    } else {
      newPosition = [parent.position[0] + (Math.random() * 2 - 1), parent.position[1] - 2, parent.position[2] + (Math.random() * 2 - 1)];
    }

    const newMember = {
      id: newId,
      name: newName,
      position: newPosition,
      children: [],
      spouseId: isSpouse ? newParentId : null,
      image: "https://via.placeholder.com/100"
    };

    // Add new sibling to the parent's children list (father and mother both)
    let updatedFamily = familyData.map((member) => {
      if (member.id === newParentId) {
        return {
          ...member,
          children: [...member.children, newId] // add to parent children
        };
      }
      if (member.id === parent.spouseId) {
        return {
          ...member,
          children: [...member.children, newId] // also add to spouse's children
        };
      }
      return member;
    });

    setFamilyData([...updatedFamily, newMember]);
    setNewName("");
    setIsSpouse(false);
  };

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <OrbitControls ref={controlsRef} enablePan={true} enableZoom={true} zoomSpeed={0.8} panSpeed={0.8} />

        {familyData.map((member) => (
          <FamilyNode key={member.id} member={member} onClick={handleNodeClick} />
        ))}

        {familyData.map((parent) =>
          parent.children.map((childId) => {
            const child = familyData.find((m) => m.id === childId);
            return (
              <Line key={`${parent.id}-${child.id}`} points={[parent.position, child.position]} color="white" lineWidth={2} />
            );
          })
        )}

        {familyData.map((member) => {
          if (member.spouseId) {
            const spouse = familyData.find((m) => m.id === member.spouseId);
            if (spouse) {
              return (
                <Line key={`spouse-${member.id}-${spouse.id}`} points={[member.position, spouse.position]} color="red" lineWidth={2} />
              );
            }
          }
          return null;
        })}
      </Canvas>

      <div style={{ position: "absolute", top: 20, left: 20, color: "white" }}>
        <h3>Add New Family Member</h3>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <select onChange={(e) => setNewParentId(parseInt(e.target.value))}>
          {familyData.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
        <label>
          <input type="checkbox" checked={isSpouse} onChange={(e) => setIsSpouse(e.target.checked)} /> Is Spouse
        </label>
        <button onClick={addFamilyMember}>Add</button>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center"
            }}
          >
            <img src={selected.image} alt={selected.name} style={{ width: "100px", borderRadius: "50%" }} />
            <h3>{selected.name}</h3>
            <p>Details about {selected.name}...</p>
            <button onClick={() => setSelected(null)} style={{ marginTop: "10px", padding: "5px 10px" }}>Close</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
