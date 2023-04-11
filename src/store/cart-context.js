import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (meal, amount) => {},
  removeItem: id => {},
  cartIsShown: false,
  onShowCart: () => {},
  onHideCart: () => {},
});

export default CartContext;
