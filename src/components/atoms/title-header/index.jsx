import { Box, Typography } from "@mui/material";
import React from "react";

const TitleHeader = ({ pageName }) => {
  return (
    <Box sx={{ backgroundColor: "bgSecondary.main", padding: "30px 10px" }}>
      <Typography
        textAlign="center"
        color="text.dark"
        fontWeight="bold"
        variant="h4"
      >
        {pageName}
      </Typography>
    </Box>
  );
};

export default TitleHeader;
