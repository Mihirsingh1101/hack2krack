import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";

const LandingPage = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [lockDate, setLockDate] = useState("");
  const [unlockedStories, setUnlockedStories] = useState([]);
  const [lockedStories, setLockedStories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const storyRefs = useRef({}); // Store refs for each story

  // Upload Story to Firebase
  const handleUpload = async () => {
    if (!title || !story || !lockDate) {
      alert("Please enter a title, story, and select a lock date.");
      return;
    }

    try {
      await addDoc(collection(db, "stories"), {
        title,
        story,
        lockDate: new Date(lockDate).toISOString(),
        createdAt: new Date().toISOString(),
      });
      alert("Story uploaded successfully!");
      setTitle("");
      setStory("");
      setLockDate("");
      fetchStories();
    } catch (error) {
      console.error("Error uploading story: ", error);
    }
  };

  // Fetch Stories from Firebase
  const fetchStories = async () => {
    const now = new Date().toISOString();
    const qUnlocked = query(collection(db, "stories"), where("lockDate", "<=", now));
    const qLocked = query(collection(db, "stories"), where("lockDate", ">", now));

    const unlockedSnapshot = await getDocs(qUnlocked);
    const lockedSnapshot = await getDocs(qLocked);

    setUnlockedStories(
      unlockedSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
    setLockedStories(
      lockedSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  useEffect(() => {
    fetchStories();
  }, []);

  // Delete Story
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this story?")) return;

    try {
      await deleteDoc(doc(db, "stories", id));
      alert("Story deleted successfully!");
      fetchStories();
    } catch (error) {
      console.error("Error deleting story:", error);
    }
  };

  // Search Function
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
  
    let foundStory = null;
    [...unlockedStories, ...lockedStories].forEach((s, index) => {
      const title = s.title ? s.title.toLowerCase() : "";
      const content = s.story ? s.story.toLowerCase() : "";
      const addedDate = s.createdAt ? new Date(s.createdAt).toLocaleString().toLowerCase() : "";
  
      if (
        title.includes(searchQuery.toLowerCase()) ||
        content.includes(searchQuery.toLowerCase()) ||
        addedDate.includes(searchQuery.toLowerCase())
      ) {
        foundStory = index;
        return;
      }
    });
  
    if (foundStory !== null && storyRefs.current[foundStory]) {
      storyRefs.current[foundStory].scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      alert("No matching story found.");
    }
  };
  

  return (
    <div style={{ padding: 20, position: "relative", minHeight: "100vh", backgroundColor: "#d4f7d4" }}>
      <h1>Time Capsule</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title, keyword, or date..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 15px", cursor: "pointer", marginBottom: "20px" }}>
        Search
      </button>

      {/* Add New Story */}
      <h2>Add a Story</h2>
      <input
        type="text"
        placeholder="Enter a title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <textarea
        placeholder="Write your story..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
        style={{
          width: "100%",
          height: 100,
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="datetime-local"
        value={lockDate}
        onChange={(e) => setLockDate(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
      />
      <button onClick={handleUpload} style={{ padding: "10px 15px", cursor: "pointer", marginBottom: "20px" }}>
        Upload Story
      </button>

      {/* Locked Stories Section */}
      <h2>Locked Stories</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {lockedStories.length === 0 ? (
          <p>No locked stories currently.</p>
        ) : (
          lockedStories.map((s, index) => (
            <li
              key={s.id}
              ref={(el) => (storyRefs.current[index] = el)}
              style={{ 
                background: "#eee", padding: "15px", borderRadius: "8px", marginBottom: "15px", 
                display: "flex", justifyContent: "space-between", alignItems: "center"
              }}
            >
              <div>
                <h3>{s.title}</h3>
                <p><strong>Date Added:</strong> {new Date(s.createdAt).toLocaleString()}</p>
                <p><strong>Unlocks On:</strong> {new Date(s.lockDate).toLocaleString()}</p>
                <p><em>This story is still locked.</em></p>
              </div>
              <button onClick={() => handleDelete(s.id)} style={{ background: "red", color: "white", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>Delete</button>
            </li>
          ))
        )}
      </ul>

      {/* Unlocked Stories Section */}
      <h2>Unlocked Stories</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {unlockedStories.length === 0 ? (
          <p>No stories have been unlocked yet.</p>
        ) : (
          unlockedStories.map((s, index) => (
            <li
              key={s.id}
              ref={(el) => (storyRefs.current[index + lockedStories.length] = el)}
              style={{ 
                background: "#fff", padding: "15px", borderRadius: "8px", marginBottom: "15px", 
                display: "flex", justifyContent: "space-between", alignItems: "center"
              }}
            >
              <div>
                <h3>{s.title}</h3>
                <p><strong>Date Added:</strong> {new Date(s.createdAt).toLocaleString()}</p>
                <p><strong>Date Unlocked:</strong> {new Date(s.lockDate).toLocaleString()}</p>
                <p>{s.story}</p>
              </div>
              <button onClick={() => handleDelete(s.id)} style={{ background: "red", color: "white", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default LandingPage;
