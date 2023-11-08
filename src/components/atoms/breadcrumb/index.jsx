import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Box } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
}

export default function Breadcrumb({ pageName }) {
  return (
    <Box
      role="presentation"
      onClick={handleClick}
      sx={{ padding: "30px 10px" }}
    >
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: "text.dark" }}>
        <Link
          underline="none"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {pageName}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
