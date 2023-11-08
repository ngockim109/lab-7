import React from "react";
import ListOfFilms from "../../../shared/ListOfFilms";
import MovieCard from "../../molecules/card";
import { Box, Grid } from "@mui/material";

const ListMovie = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
        flexWrap: "wrap",
      }}
    >
      <Grid
        container
        spacing={1}
        columns={16}
        sx={{
          width: {
            xs: "300px",
            sm: "550px",
            md: "740px",
            lg: "980px",
            xl: "1180px",
            xxl: "1380px",
          },
        }}
      >
        {ListOfFilms.map((movie, index) => (
          <MovieCard
            key={index++}
            url={movie.Poster}
            title={movie.Title}
            rating={movie.imdbRating}
            images={movie.Images}
            description={movie.Plot}
            id={index++}
            movie={movie}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ListMovie;
