import "./styles.css";
import Navbar from "./components/Navbar";

import { ChakraProvider } from "@chakra-ui/react";
//import SidebarWithHeader from "./components/navbar";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar position="fixed" />
      </ChakraProvider>
    </div>
  );
}
