import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider } from '@chakra-ui/react';
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { theme } from "./Theme/index.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraBaseProvider theme={theme}>


      <App />
    </ChakraBaseProvider>

  </React.StrictMode>,
)
