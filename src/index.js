import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
import CartProvider from './store/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
