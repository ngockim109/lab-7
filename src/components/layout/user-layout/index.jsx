import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Outlet, useOutlet } from "react-router-dom";
import Navigation from "../../atoms/navigation";
import Footer from "../../atoms/footer";

const Layout = ({ theme, changeTheme }) => {
  return (
    <div id="layout">
      <Navigation theme={theme} changeTheme={changeTheme} />
      <Outlet />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};

export default Layout;
