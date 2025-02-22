import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from './pages/landingpage'
import Loginpage from "./components/auth";
import Imagecapsule from './pages/imagecapsule'

import Profile from './pages/profile'

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
