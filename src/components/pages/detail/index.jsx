import React from "react";
import { useParams } from "react-router-dom";
import ListOfFilms from "../../../shared/ListOfFilms";
import { Box, Container, Typography } from "@mui/material";
import DetailContent from "../../organisms/detail-content";
import Header from "../../molecules/header";

const MovieDetail = () => {
  const params = useParams();
  console.log(params);
  let movie = ListOfFilms.find((item) => item.Title === params.id);
  console.log(movie);
  const contents = [
    { id: "1", name: "Rating", value: movie.imdbRating },
    { id: "2", name: "Votes", value: movie.imdbVotes },
    { id: "3", name: "Runtime", value: movie.Runtime },
    { id: "4", name: "Director", value: movie.Director },
    { id: "5", name: "Starring", value: movie.Actors },
    { id: "6", name: "Country", value: movie.Country },
    { id: "7", name: "Year", value: movie.Year },
    { id: "8", name: "Description", value: movie.Plot },
  ];
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginBottom="50px"
    >
      <Header pageName={movie.Title} />
      <DetailContent contents={contents} movie={movie} />
    </Box>
  );
};

export default MovieDetail;
