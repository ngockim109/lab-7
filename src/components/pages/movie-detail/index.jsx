import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../config/api";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

const MovieDetailManagement = () => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const movie = useParams();
  const getMovieUrl = `/movies/${movie.id}`;
  const loadMovie = async () => {
    try {
      setLoading(false);
      let res = await api
        .get(getMovieUrl)
        .then((response) => {
          if (response.status === 200) {
            setLoading(true);
            console.log(response);
            return response;
          }
        })
        .then((data) => setMovieData(data.data));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadMovie();
  }, [refresh, getMovieUrl]);
  const contents = [
    { id: "1", name: "Title", value: movieData.Title },
    { id: "4", name: "Imdb ID", value: movieData.imdbID },
    { id: "5", name: "Imdb Rating", value: movieData.imdbRating },
    { id: "17", name: "Metascore", value: movieData.Metascore },
    { id: "12", name: "Awards", value: movieData.Awards },
    { id: "3", name: "Runtime", value: movieData.Runtime },
    { id: "15", name: "Genre", value: movieData.Genre },
    { id: "8", name: "Type", value: movieData.Type },
    { id: "2", name: "Plot", value: movieData.Plot },
    { id: "6", name: "Total Seasons", value: movieData.totalSeasons },
    { id: "7", name: "Year", value: movieData.Year },
    { id: "9", name: "Released", value: movieData.Released },
    { id: "14", name: "Director", value: movieData.Director },
    { id: "11", name: "Actors", value: movieData.Actors },
    { id: "10", name: "Writer", value: movieData.Writer },
    { id: "13", name: "Country", value: movieData.Country },
    { id: "16", name: "Language", value: movieData.Language },
    { id: "18", name: "Rated", value: movieData.Rated },
    {
      id: "18",
      name: "Response",
      value: movieData.Response ? "True" : "False",
    },
  ];
  return (
    <>
      {loading ? (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Container sx={{ margin: "20px 0" }}>
            <img
              src={movieData.Poster}
              alt={movieData.Title}
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            ></img>
            <div style={{ marginTop: "20px" }}>
              {contents.map(
                (item) =>
                  item.value && (
                    <Box key={item.id} display="flex" alignItems="center">
                      <Typography color="red" fontWeight="600" width="140px">
                        {item.name}
                      </Typography>
                      <Typography color="inherit" width={"100%"}>
                        {item.value}
                      </Typography>
                    </Box>
                  )
              )}
            </div>
          </Container>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default MovieDetailManagement;
