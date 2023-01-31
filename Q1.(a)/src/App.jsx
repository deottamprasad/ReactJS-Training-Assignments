import About from "./components/About";
import Home from "./components/Home";
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

import Paths from "./routes";

import "./styles.css";

//Here I have added all the route paths and the component which is going to be rendered on that path.
//I have also added a dynamic route (":userid") and nested routes like featured and new inside Products route.
//I have added a NoMatch component for route which doesn't matches with any specified route which just prints Page not found.
//I have created a <NavBar> component which consists of links to different routes.

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={Paths.ROOT} element={<Home />} />
        <Route path={Paths.ABOUT} element={<About />} />
        <Route path={Paths.ORDER_SUMMARY} element={<OrderSummary />} />
        <Route path={Paths.PRODUCTS} element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path={Paths.FEATURED} element={<FeaturedProducts />} />
          <Route path={Paths.NEW} element={<NewProducts />} />
        </Route>
        <Route path={Paths.USERS} element={<Users />}>
          <Route path={Paths.USERID} element={<UserDetails />} />
          <Route path={Paths.ADMIN} element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
