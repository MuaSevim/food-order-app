import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);

  const totalMeals = cartCtx.meals.reduce((sum, meal) => sum + meal.amount, 0);

  const onClickHandler = () => {
    cartCtx.onShowCart();
    console.log('Button cartIsShown :', cartCtx.cartIsShown);
    console.log('Button total meals :', totalMeals);
  };

  return (
    <button className={styles.btn} onClick={onClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>{totalMeals}</span>
    </button>
  );
};

export default HeaderCartButton;
