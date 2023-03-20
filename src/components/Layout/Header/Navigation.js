import HeaderCartButton from './HeaderCartButton';
import styles from './Navigation.module.css';

const Navigation = props => {
  return (
    <nav className={styles.nav}>
      <h2 className={styles['header-secondary']}>Milano Pizzas</h2>
      <HeaderCartButton />
    </nav>
  );
};

export default Navigation;
