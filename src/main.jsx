import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './components/views/Home/Home';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{
      colorScheme: 'dark',
      whiteVariant: {
        color: 'white',
        // Additional styles for the white variant
        // ...
      },
      shadows: {
        md: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
      },
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

