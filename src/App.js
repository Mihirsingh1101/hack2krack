import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import LoginPage from "../src/components/auth";
import Profile from "./pages/profile";
import TimeCapsule from "./pages/TimeCapsule";
import StoriesCapsule from "./pages/StoriesCapsule"; // 📌 Create these capsule pages
import ImageCapsule from "./pages/Imagecapsule";
import VideoCapsule from "./pages/Videocapsule";
import AudioCapsule from "./pages/AudioCapsule";
import CollabCapsule from "./pages/CollabCapsule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/timecapsule" element={<TimeCapsule />} />
        <Route path="/capsule/stories" element={<StoriesCapsule />} />
        <Route path="/capsule/image" element={<ImageCapsule />} />
        <Route path="/capsule/video" element={<VideoCapsule />} />
        <Route path="/capsule/audio" element={<AudioCapsule />} />
        <Route path="/capsule/collab" element={ <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <CollabCapsule/>
    </div>} />
      </Routes>
    </Router>
  );
}

export default App;
