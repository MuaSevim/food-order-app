import React from "react";

const CartContext = React.createContext({});

export const CartContextProvider = (props) => {
    
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
