import { Container, Typography } from "@mui/material";
import React from "react";
import ListMovie from "../../organisms/list-movie";

const Discovery = () => {
  return (
    <Container style={{ margin: "20px 0", width: "100%" }}>
      <Typography variant="h4" color="text.light" fontWeight={700}>
        Discovery
      </Typography>
      <ListMovie />
    </Container>
  );
};

export default Discovery;
