import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (meal, amount) => {},
  removeItem: id => {},
  cartIsShown: false,
  onShowCart: () => {},
  onHideCart: () => {},
});

export default CartContext;
