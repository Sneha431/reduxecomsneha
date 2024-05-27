import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;

  box-sizing:border-box;
  padding:0;
}

body
{
  background-color:#323334;
  color:white;
  min-height:100vh;
  font-family: 'Inter' , sans-serif;
  font-size: 14px;
}

`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
