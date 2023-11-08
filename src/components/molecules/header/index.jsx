import React from "react";
import Breadcrumb from "../../atoms/breadcrumb";
import TitleHeader from "../../atoms/title-header";

const Header = ({ pageName }) => {
  return (
    <div style={{ width: "100%" }}>
      <TitleHeader pageName={pageName} />
      <Breadcrumb pageName={pageName} />
    </div>
  );
};

export default Header;
