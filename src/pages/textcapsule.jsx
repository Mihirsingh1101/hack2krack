import React, { useState, useEffect } from "react";
import { storage,  imageDb } from "../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const LandingPage = () => {
  const [file, setFile] = useState(null);
  const [lockTime, setLockTime] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [locked, setLocked] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleLockTimeChange = (event) => {
    setLockTime(event.target.value);
  };

  const handleUpload = async () => {
    if (!file || !lockTime) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => console.error(error),
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(downloadURL);

        // Add the image and lock time to Firestore
        await addDoc(collection(imageDb, "images"), {
          imageUrl: downloadURL,
          lockTime: new Date(lockTime),
          locked: true,
        });
        setLocked(true);
      }
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (locked && new Date(lockTime) <= new Date()) {
        setTimeExpired(true);
        setLocked(false); // Unlock the image
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [lockTime, locked]);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "150vh",
        overflowX: "hidden",
        backgroundColor: "#f7f7f7",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          textAlign: "center",
          padding: "50px 20px",
          fontSize: "36px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "40px",
        }}
      >
        Time Capsule - Upload Your Past Memories
      </div>

      {/* Upload Form Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "15px",
            fontSize: "18px",
            fontWeight: "500",
            color: "#444",
          }}
        >
          Select Image
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            width: "80%",
          }}
        />

        <div
          style={{
            marginBottom: "15px",
            fontSize: "18px",
            fontWeight: "500",
            color: "#444",
          }}
        >
          Set Lock Time
        </div>
        <input
          type="datetime-local"
          onChange={handleLockTimeChange}
          style={{
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "16px",
            width: "80%",
          }}
        />

        <button
          onClick={handleUpload}
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "600",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            border: "none",
            marginBottom: "20px",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Upload & Lock
        </button>
      </div>

      {/* Image Display After Time Expiry */}
      {timeExpired && !locked && imageUrl && (
        <div
          style={{
            marginTop: "40px",
            width: "80%",
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Your Time Capsule Image
          </div>
          <img
            src={imageUrl}
            alt="Unlocked"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
