import { createContext } from 'react';
import { meals } from './mealsData';

const CartContext = createContext({
  meals: [],
  onAddMeal: () => {},
  onIncreaseMeal: () => {},
  onDecreaseMeal: () => {},
});

export const CartContextProvider = props => {
  const addMealHandler = (id, amount) => {
    // Find the meal
    const meal = meals.find(meal => meal.info.id === id);
    // Update the amount
    meal.amount += +amount;
    // Final Result:
    console.log(meal.info.name, meal.amount);
  };

  const increaseMealHandler = id => {};

  const decreaseMealHandler = id => {};

  const displayTotalAmount = pizzas => {};

  const ctxValues = {
    meals,
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
