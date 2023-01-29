import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <h1>Admin Page</h1>
      <Outlet />
    </>
  );
}

export default Admin;
