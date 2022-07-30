import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MouseContextProvider from "./context/Mouse-context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App/>
    </MouseContextProvider>
  </React.StrictMode>
);
