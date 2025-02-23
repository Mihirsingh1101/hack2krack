import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const TimeCapsuleDashboard = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const capsuleData = [
    { type: "STORIES", route: "/capsule/stories" },
    { type: "IMAGE", route: "/capsule/image" },
    { type: "VIDEO", route: "/capsule/video" },
    { type: "AUDIO", route: "/capsule/audio" },
    { type: "COLLAB", route: "/capsule/collab" },
  ];

  const positions = [
    [118, 500],
    [604, 500],
    [1087, 500],
    [120, 850],
    [612, 850],
  ];

  return (
    <div style={{ width: 1437, height: 1024, position: "relative", background: "white" }}>
      {/* Header */}
      <div style={{ width: 1240, height: 57, left: 100, top: 54, position: "absolute", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 36, fontFamily: "Italiana", fontWeight: "400", lineHeight: "40px" }}>Time capsule</div>
      </div>

      {/* Greeting */}
      <div style={{ width: 711, height: 79, left: 100, top: 200, position: "absolute", display: "flex", flexDirection: "column", gap: 20, alignItems: "flex-start" }}>
        <div style={{ textAlign: "left" }}>
          <span style={{ fontSize: 48, fontFamily: "Karla", fontWeight: "700" }}>Hi<br /></span>
          <span style={{ fontSize: 30, fontFamily: "Karla", fontWeight: "700" }}>What brings you here today.....</span>
        </div>
      </div>

      {/* Capsule Buttons */}
      {capsuleData.map((capsule, idx) => (
        <Button
          key={capsule.type}
          onClick={() => navigate(capsule.route)} // ✅ Navigate to capsule page
          style={{
            position: "absolute",
            left: positions[idx][0],
            top: positions[idx][1],
            width: 231,
            height: 189,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#54BE96",
            color: "white",
            fontSize: 20,
            fontFamily: "Karla",
            fontWeight: "600",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          {capsule.type} CAPSULE
        </Button>
      ))}
    </div>
  );
};

export default TimeCapsuleDashboard;
