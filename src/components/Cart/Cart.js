import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styles from './Cart.module.css';

const CartBackdrop = props => <div className={styles.backdrop}></div>;

const CartOverlay = props => {
  return <div className={styles.overlay}></div>;
};

const Cart = props => {
  <Fragment>
    {ReactDOM.createPortal(
      <CartBackdrop />,
      document.getElementById('cart-backdrop')
    )}
    {ReactDOM.createPortal(
      <CartOverlay />,
      document.getElementById('cart-overlay')
    )}
  </Fragment>;
};

export default Cart;
