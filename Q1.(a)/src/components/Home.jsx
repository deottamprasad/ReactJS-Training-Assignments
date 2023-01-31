import { useNavigate } from "react-router-dom";

import Paths from "../routes";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate(Paths.ORDER_SUMMARY)}>Place Order</button>
    </>
  );
}

export default Home;
