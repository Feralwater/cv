import React from 'react';
import ReactDOM from 'react-dom/client';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import MouseContextProvider from './context/Mouse-context';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Poppins', sans-serif;
    
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #7e7e7e;
      border-radius: 6px;
    }
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <GlobalStyle />
      <App />
    </MouseContextProvider>
  </React.StrictMode>,
);
