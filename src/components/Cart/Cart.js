import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = () => {
  const ctx = useContext(CartContext);

  const cartItems = (
    <ul className={styles.items}>
      {[{ id: 'c1', name: 'Pepperoni Pizza', amount: 3, price: 16.55 }].map(
        item => (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onBackdropClick={ctx.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={ctx.onHideCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
