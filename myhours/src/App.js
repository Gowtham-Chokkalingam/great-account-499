import NavBar from "./Routes/NavBar";

import AllRoutes from "./Routes/AllRoutes";
import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import Home from "./Pages/Home";
import HowItWorks from "./Pages/HowItWorks";

function App() {
  return (
    <Stack w={"full"} h={'100%'}>
      <NavBar></NavBar>
    
      <AllRoutes></AllRoutes>
    </Stack>
  );
}

export default App;
