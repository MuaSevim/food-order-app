import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);
  // const totalAmount = cartCtx.totalAmount;
  const totalAmount = cartCtx.items.reduce((acc, curr) => acc + curr.amount, 0);
  const onClickHandler = () => cartCtx.onShowCart();

  return (
    <button className={styles.btn} onClick={onClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>{totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
