import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "./components/auth";
import Imagecapsule from './pages/imagecapsule'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/movies" element={<Imagecapsule />} />
      </Routes>
    </Router>
  );
}

export default App;
