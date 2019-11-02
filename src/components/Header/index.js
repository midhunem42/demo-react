import React from "react";

const Header = props => {
  const { brandName } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <label className="navbar-brand">{brandName}</label>
    </nav>
  );
};
Header.defaultProps = {
  brandName: "Brand Name"
};
export default Header;
