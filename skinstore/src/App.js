import "./styles.css";

import { ChakraProvider } from "@chakra-ui/react";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CaptionCarousel from "./components/Home";
//import SidebarWithHeader from "./components/navbar";
import AllRoutes from "./Routes/AllRoutes";
import Products from './components/Product'
import Signup from "./components/Signup";
export default function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <AllRoutes />
        <Footer />
      </ChakraProvider>
    </>
  );
}
