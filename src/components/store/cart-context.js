import { createContext } from 'react';
import { meals } from './mealsData';

const CartContext = createContext({
  meals: [],
  selectedMeals: [],
  onAddMeal: () => {},
  onIncreaseMeal: () => {},
  onDecreaseMeal: () => {},
});

export const CartContextProvider = props => {
  const selectedMeals = [];

  const addMealHandler = (id, amount) => {
    // Find the meal
    const meal = meals.find(meal => meal.info.id === id);

    // Update the amount
    meal.amount += +amount;

    // Update the selected meals
    const selectedMeal = selectedMeals.find(m => m.id === id);
    if (selectedMeal) selectedMeal.amount += +amount;
    else selectedMeals.push({ id, amount: +amount });
  };

  const increaseMealHandler = id => {};

  const decreaseMealHandler = id => {};

  const displayTotalAmount = pizzas => {};

  const ctxValues = {
    meals,
    selectedMeals,
    onAddMeal: addMealHandler,
    onIncreaseMeal: increaseMealHandler,
    onDecreaseMeal: decreaseMealHandler,
    displayTotalAmount,
  };
  return (
    <CartContext.Provider value={ctxValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
