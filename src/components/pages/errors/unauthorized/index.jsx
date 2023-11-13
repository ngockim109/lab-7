import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div>
      Unauthorized
      <Button variant="contained" onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
};

export default Unauthorized;
