import { useState, useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
  }

  return defaultCartState;
};

const CartProvider = props => {
  const findMeal = id => meals.find(m => m.id === id);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  // Cart Modal Logic
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartContext = {
    cartIsShown,
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    onShowCart: () => setCartIsShown(true),
    onHideCart: () => setCartIsShown(false),
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
