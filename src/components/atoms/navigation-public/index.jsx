import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PropTypes from "prop-types";
import { Link } from "@mui/material";
import logo from "../../../assets/images/logo.webp";
export default function NavigationPublic({ theme, changeTheme }) {
  return (
    <Box>
      <Toolbar>
        <Link href="/" underline="none">
          <Box component="img" alt="Streamo" src={logo} />
        </Link>
        <IconButton
          onClick={changeTheme}
          color="inherit"
          sx={{ marginLeft: "auto" }}
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </Box>
  );
}

NavigationPublic.propTypes = {
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};
