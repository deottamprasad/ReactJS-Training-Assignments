import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <h2 onClick={() => navigate("1")}>User 1</h2>
      <h2 onClick={() => navigate("2")}>User 2</h2>
      <h2 onClick={() => navigate("3")}>User 3</h2>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      {searchParams.get("filter") === "active" ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </>
  );
}
export default Users;
