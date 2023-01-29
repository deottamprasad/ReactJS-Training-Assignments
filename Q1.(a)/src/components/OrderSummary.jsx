import { useNavigate } from "react-router-dom";
function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed!</div>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}

export default OrderSummary;
