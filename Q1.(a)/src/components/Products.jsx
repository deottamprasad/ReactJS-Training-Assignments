import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <input type="search" placeholder="Search Products" />
      <nav>
        <Link to="featured">featured</Link>
        <Link to="new">new</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Products;
