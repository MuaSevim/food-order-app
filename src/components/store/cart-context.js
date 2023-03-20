import { createContext, useState } from 'react';
import { meals } from './mealsData';

const CartContext = createContext({
  meals: [],
  selectedMeals: [],
  onAddMeal: () => {},
  onIncreaseMeal: () => {},
  onDecreaseMeal: () => {},
});

export const CartContextProvider = props => {
  const [selectedMeals, setSelectedMeals] = useState([]);

  const addMealHandler = (id, amount) => {
    // Find the meal
    const meal = meals.find(meal => meal.info.id === id);
    // Update the amount
    meal.amount += +amount;

    setSelectedMeals(prevMeals => {
      if (prevMeals.find(meal => meal.id === id)) {
        prevMeals.find(meal => meal.id === id).amount += +amount;
      } else {
        prevMeals.push({ id, amount: +amount });
      }
      return prevMeals;
    });

    // Final Result:
    console.log(meal.info.name, meal.amount);
    console.log(selectedMeals);
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
