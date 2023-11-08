import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

const Feature = ({ name, values, description }) => {
  return (
    <Grid item xs={4} display="flex" flexDirection="column">
      <Typography variant="h5" color="text.highlight" fontWeight="bold">
        {name}
      </Typography>
      <Typography variant="span" marginTop={2} textAlign="justify">
        {description}
      </Typography>
      {values.map((value) => (
        <Box key={value.id} display="flex" marginTop="auto" alignItems="center">
          <IconButton color="error">{value.icon}</IconButton>
          <Typography variant="span" marginLeft={1}>
            {value.keyValue}
          </Typography>
        </Box>
      ))}
    </Grid>
  );
};

export default Feature;
