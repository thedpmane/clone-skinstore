import { Route, Routes } from "react-router-dom";
import CartPage from "../components/CartPage";
import Home from "../components/Home";
import Login from "../components/Login";
import OneProduct from "../components/OneProduct";
import Products from "../components/Product";
import Signup from "../components/Signup";

//import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/products/:id" element={<OneProduct />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
