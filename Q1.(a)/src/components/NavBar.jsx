import { NavLink } from "react-router-dom";

import Paths from "../routes";

function NavBar() {
  function navLinkStyles({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "none",
      textDecoration: isActive ? "none" : "underline"
    };
  }
  return (
    <nav className="primary-nav">
        <NavLink style={navLinkStyles} to={Paths.ROOT}>
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to={Paths.ABOUT}>
          About
        </NavLink>
        <NavLink style={navLinkStyles} to={Paths.PRODUCTS}>
          Products
        </NavLink>
      </nav>
  );
}

export default NavBar;
