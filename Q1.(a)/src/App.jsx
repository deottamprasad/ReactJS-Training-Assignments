import About from "./components/About";
import Home from "./components/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import Admin from "./components/Admin";
import UserDetails from "./components/UserDetails";

//Here I have added all the route paths and the component which is going to be rendered on that path.
//I have also added a dynamic route (":userid") and nested routes like featured and new inside Products route.
//I have added a NoMatch component for route which doesn't matches with any specified route which just prints Page not found.
//I have created a <NavBar> component which consists of links to different routes.

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userid" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
