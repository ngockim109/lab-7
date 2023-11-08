import React from "react";
import ListMovie from "../../organisms/list-movie";
import { Box, sliderClasses } from "@mui/material";
import Discovery from "../../templates/discovery";
import ListOfFilms from "../../../shared/ListOfFilms";
import MovieCard from "../../molecules/card";

const Home = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Discovery />
      </Box>
    </Box>
  );
};

export default Home;
