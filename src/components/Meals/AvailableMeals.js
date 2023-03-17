import MealItem from "./MealItem";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Margheritta Pizza",
    description: "An Italian classic ...",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Pepperoni Pizza",
    description: "With mozarella cheese and more!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Royal Barbecue Pizza",
    description: "Spicy barbeceu sauces",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Cheese Pizza",
    description: "Classic cheese or your own choices",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul className={styles["meals-list"]}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
