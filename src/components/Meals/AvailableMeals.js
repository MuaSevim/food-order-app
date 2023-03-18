import { useContext } from 'react';
import CartContext from '../store/cart-context';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const { meals } = useContext(CartContext);

  const mealsList = meals.map(meal => (
    <MealItem key={meal.info.id} meal={meal.info} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul className={styles.list}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
