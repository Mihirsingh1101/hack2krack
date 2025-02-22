import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { auth, gProvider } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import { getDocs, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Hook for navigation

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/movies"); // ✅ Redirect after login
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, gProvider);
      navigate("/movies"); // ✅ Redirect after Google login
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h5" gutterBottom>Login</Typography>
        <TextField fullWidth label="Email" variant="outlined" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="button" fullWidth variant="contained" color="primary" style={{ marginTop: "16px" }} onClick={signIn}>Sign In</Button>
        <Button type="button" fullWidth variant="contained" color="secondary" style={{ marginTop: "16px" }} onClick={signInWithGoogle}>Sign in with Google</Button>
      </Box>
    </Container>
  );
};

export default Loginpage;
