import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);

  const mealAmount = ctx.selectedMeals.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);
  
  return (
    <button className={styles.btn}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>{0}</span>
    </button>
  );
};

export default HeaderCartButton;
