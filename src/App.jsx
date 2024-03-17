import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import theme from './theme/index';
import About from './views/About';
import Publications from './views/Publications';

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
