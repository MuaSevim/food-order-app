import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = props => {
  const { id, name, description, price } = props.meal;

  const mealPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <li className={styles.meal}>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{mealPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
