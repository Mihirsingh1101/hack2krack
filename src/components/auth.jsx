import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { auth, gProvider } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // ✅ Correct function for existing users
      navigate("/Profile"); // ✅ Redirect after successful login
    } catch (error) {
      console.error("Error signing in:", error.message);
      alert("Login failed. Check your email and password.");
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // ✅ Correct function for new users
      navigate("/Profile"); // ✅ Redirect after sign-up
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("Sign-up failed. Email might be already in use.");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, gProvider);
      navigate("/Profile"); // ✅ Redirect after Google login
    } catch (error) {
      console.error("Error signing in:", error.message);
      alert("Google sign-in failed.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h5" gutterBottom>Login</Typography>
        <TextField fullWidth label="Email" variant="outlined" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="button" fullWidth variant="contained" color="primary" style={{ marginTop: "16px" }} onClick={signIn}>Sign In</Button>
        <Button type="button" fullWidth variant="contained" color="success" style={{ marginTop: "16px" }} onClick={signUp}>Sign Up</Button>
        <Button type="button" fullWidth variant="contained" color="secondary" style={{ marginTop: "16px" }} onClick={signInWithGoogle}>Sign in with Google</Button>
      </Box>
    </Container>
  );
};

export default Loginpage;
