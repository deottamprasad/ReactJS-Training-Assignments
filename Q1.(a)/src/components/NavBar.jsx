import { NavLink } from "react-router-dom";
function NavBar() {
  function navLinkStyles({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "none",
      textDecoration: isActive ? "none" : "underline"
    };
  }
  return (
    <>
      <nav className="primary-nav">
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkStyles} to="/products">
          Products
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
