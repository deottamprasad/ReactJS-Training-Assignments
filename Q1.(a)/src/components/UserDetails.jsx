import { Outlet, useParams } from "react-router-dom";
function UserDetails() {
  const userId = useParams().userid;
  return (
    <>
      <div>User Details {userId}</div>
      <Outlet />
    </>
  );
}
export default UserDetails;
