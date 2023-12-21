import React from "react";
import About from "./views/About.jsx";
import Publications from "./views/Publications.jsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// Styles
import "./App.css";
import theme from "./theme/index";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
