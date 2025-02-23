import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const MoviesPage = () => {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        setMovieList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.error(err);
      }
    };
    getMovieList();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>Movie List</Typography>
      <Box>
        {movieList.map((movie) => (
          <Box key={movie.id} mb={2} p={2} border="1px solid #ccc" borderRadius={2}>
            <Typography variant="h6" color={movie.recievedAnOscar ? "green" : "red"}>{movie.title}</Typography>
            <Typography variant="body1">Date: {movie.ReleaseDate}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default MoviesPage;
