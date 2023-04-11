import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = props => {
  const meal = props.meal;

  const mealPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(meal.price);

  return (
    <li className={styles.meal}>
      <div className={styles.info}>
        <h3 className={styles.name}>{meal.name}</h3>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>{mealPrice}</p>
      </div>
      <div>
        <MealItemForm item={meal} />
      </div>
    </li>
  );
};

export default MealItem;
