import { Box, Container, Typography } from "@mui/material";
import React from "react";

const DetailContent = ({ movie, contents }) => {
  return (
    <Container>
      <img
        src={movie.Images[0]}
        alt={movie.Title}
        style={{ width: "100%", height: "500px", objectFit: "cover" }}
      ></img>
      <div style={{ marginTop: "20px" }}>
        {contents.map((item) => (
          <Box key={item.id} display="flex" alignItems="center">
            <Typography color="red" variant="h6" fontWeight="600" width="140px">
              {item.name}
            </Typography>
            <Typography color="inherit" sx={{ offset: "3" }}>
              {item.value}
            </Typography>
          </Box>
        ))}

        {movie.Awards?.length ? null : (
          <Typography color="inherit">Awards: {movie.Awards}</Typography>
        )}
      </div>
    </Container>
  );
};

export default DetailContent;
