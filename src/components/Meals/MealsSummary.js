import styles from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Milano Pizzas Delivered To You</h2>
      <p>
        Choose your favourite pizza from our broad selection of available pizzas
        and enjoy a delicous lunch or dinner at home.
      </p>
      <p>
        All our pizzas are cooked with high quality ingredients, just-in-time by
        our highly professional chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
