import { Link, Outlet } from "react-router-dom";

import Paths from "../routes";

function Products() {
  return (
    <>
      <input type="search" placeholder="Search Products" />
      <nav>
        <Link to={Paths.FEATURED}>featured</Link>
        <Link to={Paths.NEW}>new</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Products;
