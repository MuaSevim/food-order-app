import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import meals from '../../store/meals-data';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const mealsList = meals.map(meal => <MealItem key={meal.id} meal={meal} />);

  return (
    <section className={styles.meals}>
      <Card>
        <ul className={styles.list}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
