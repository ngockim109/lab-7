import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Outlet, useOutlet } from "react-router-dom";
import Navigation from "../../atoms/navigation";
import Footer from "../../atoms/footer";
import NavigationPublic from "../../atoms/navigation-public";

const PublicLayout = ({ theme, changeTheme }) => {
  return (
    <div id="layout">
      <NavigationPublic theme={theme} changeTheme={changeTheme} />
      <Outlet />
    </div>
  );
};

PublicLayout.propTypes = {
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};

export default PublicLayout;
