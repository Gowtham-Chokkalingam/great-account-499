import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      error: 'red.500',
      success: 'green.500',
      primary: {
        default: 'gray.600',
        _dark: 'gray.100',
      },
      secondary: {
        default: 'gray.900',
        _dark: 'gray.50',
      },
      colr2:{
        default: 'gray.600',
        _dark: 'gray.50',
      },
      colr3:{
        default: 'blue.600',
        _dark: 'gray.50',
      },

      footer:{
        default: 'white',
        _dark: 'gray.900',
      }
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="light"></ColorModeScript>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
