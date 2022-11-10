import "./styles.css";

import { ChakraProvider } from "@chakra-ui/react";
// import Home from "./components/Home";
import CaptionCarousel from "./components/Home";
//import SidebarWithHeader from "./components/navbar";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <CaptionCarousel/>
      </ChakraProvider>
    </div>
  );
}
