import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import unauthorizedImg from "../../../../assets/images/401-unauthorized.png";
const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => navigate("/");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 0",
      }}
    >
      <Box
        component="img"
        alt="Streamo"
        src={unauthorizedImg}
        sx={{ width: "30%", display: "flex", justifyContent: "center" }}
      />
      <Button variant="contained" onClick={goHome} sx={{ margin: "20px 0" }}>
        Go Home
      </Button>
    </Box>
  );
};

export default Unauthorized;
