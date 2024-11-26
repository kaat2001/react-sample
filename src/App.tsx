import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './data/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes';

function App() {
  
  const router = createBrowserRouter(ROUTES);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />

    </ThemeProvider> 
  );
}

export default App;
