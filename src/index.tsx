import React from 'react';
import ReactDOM from 'react-dom/client';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import MouseContextProvider from './context/Mouse-context';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Poppins', sans-serif;
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
