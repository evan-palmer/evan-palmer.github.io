import React from "react";
import About from "./views/About.jsx";
import Publications from "./views/Publications.jsx";
import { Route, HashRouter, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

// Styles
import "./App.css";
import theme from "./theme/index";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
