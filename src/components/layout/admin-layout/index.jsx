import { Box } from "@mui/material";
// import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import NavigationAdmin from "../../atoms/navigation-admin";
import FooterAdmin from "../../atoms/footer-admin";

const AdminLayout = ({ theme, changeTheme }) => {
  return (
    <div id="layout">
      <NavigationAdmin theme={theme} changeTheme={changeTheme} />
      <Outlet />
      <FooterAdmin />
    </div>
  );
};

AdminLayout.propTypes = {
  theme: PropTypes.string,
  changeTheme: PropTypes.func,
};

export default AdminLayout;
