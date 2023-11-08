import React, { useEffect, useState } from "react";
import api from "../../../config/api";
import MovieTable from "../../templates/movie-table";
import { CircularProgress, Typography } from "@mui/material";

const MovieManagement = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const loadData = async () => {
    try {
      setLoading(false);
      let response = await api.get("/movies");
      if (response.status === 200) {
        setMovies(response.data);
        setLoading(true);
        console.log(movies);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadData();
  }, [refresh]);
  return loading ? (
    <MovieTable
      movies={movies}
      refresh={refresh}
      setRefresh={setRefresh}
      loading={loading}
    ></MovieTable>
  ) : (
    <CircularProgress />
  );
};

export default MovieManagement;
