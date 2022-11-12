import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Products from  "../components/Product";
import Signup from "../components/Signup";

//import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login" element={<Signup/>} />
        <Route path="/products" element={<Products/>} />
      
      </Routes>
    </div>
  );
}

export default AllRoutes;
