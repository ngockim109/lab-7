import React from "react";
import { Grid } from "@mui/material";
import KeyReason from "../../organisms/key-reason";

const Reasons = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{ backgroundColor: "bgSecondary.main" }}
    >
      <Grid item padding="30px 50px">
        <KeyReason />
      </Grid>
    </Grid>
  );
};

export default Reasons;
