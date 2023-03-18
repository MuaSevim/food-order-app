import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { CartContextProvider } from './components/store/cart-context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
