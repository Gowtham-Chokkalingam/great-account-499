import NavBar from "./Routes/NavBar";

import AllRoutes from "./Routes/AllRoutes";
import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import Home from "./Pages/Home";

function App() {
  return (
    <Stack w={"full"} h={'8000'}>
      <NavBar></NavBar>
    
      <AllRoutes></AllRoutes>
    </Stack>
  );
}

export default App;
