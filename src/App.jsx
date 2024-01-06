import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactGA from 'react-ga4';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import theme from './theme/index';
import About from './views/About';
import Publications from './views/Publications';

function App() {
  // Initialize Google Analytics
  const trackingId = 'G-PW8XHB5FGG';
  ReactGA.initialize(trackingId);

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
