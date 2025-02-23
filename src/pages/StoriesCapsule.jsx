import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const LandingPage = () => {
  const [story, setStory] = useState("");
  const [lockDate, setLockDate] = useState("");
  const [stories, setStories] = useState([]);

  // Upload Story to Firebase
  const handleUpload = async () => {
    if (!story || !lockDate) {
      alert("Please enter a story and select a lock date.");
      return;
    }

    try {
      await addDoc(collection(db, "stories"), {
        story,
        lockDate: new Date(lockDate).toISOString(),
        createdAt: new Date().toISOString(),
      });
      alert("Story uploaded successfully!");
      setStory("");
      setLockDate("");
    } catch (error) {
      console.error("Error uploading story: ", error);
    }
  };

  // Fetch Unlocked Stories
  const fetchUnlockedStories = async () => {
    const now = new Date().toISOString();
    const q = query(collection(db, "stories"), where("lockDate", "<=", now));
    const querySnapshot = await getDocs(q);
    const fetchedStories = querySnapshot.docs.map((doc) => doc.data());
    setStories(fetchedStories);
  };

  useEffect(() => {
    fetchUnlockedStories();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Time Capsule</h1>
      <textarea
        placeholder="Write your story..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
        style={{ width: "100%", height: 100 }}
      />
      <input
        type="datetime-local"
        value={lockDate}
        onChange={(e) => setLockDate(e.target.value)}
      />
      <button onClick={handleUpload}>Upload Story</button>

      <h2>Unlocked Stories</h2>
      <ul>
        {stories.map((s, index) => (
          <li key={index}>{s.story}</li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
