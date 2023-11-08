import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const Statistic = ({ name, value, component }) => {
  return (
    <Grid
      item
      xs={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <IconButton color="deep.main" aria-label="name">
        {component}
      </IconButton>
      <Typography variant="h4" fontWeight="bold" color="text.highlight">
        {value}
      </Typography>
      <Typography color="text.primary">{name}</Typography>
    </Grid>
  );
};

export default Statistic;
