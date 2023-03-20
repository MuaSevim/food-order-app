import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const { selectedMeals } = useContext(CartContext);

  let totalMeals = 0;

  if (selectedMeals[0]) {
    totalMeals = selectedMeals
      .map(meal => meal.amount)
      .reduce((acc, curr) => acc + curr);
  }

  return (
    <button className={styles.btn}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>{totalMeals}</span>
    </button>
  );
};

export default HeaderCartButton;
