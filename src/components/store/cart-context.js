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

  // When this function is executed CartButton and Cart components should get re-rendered with newer values
  const addMealHandler = (id, amount) => {
    console.log('Context');
    // Find the meal
    const meal = meals.find(meal => meal.info.id === id);

    // Update the amount
    meal.amount += +amount;

    // Update the selected meals
    // When this happens, I want to update the CartButton Component
    const selectedMeal = selectedMeals.find(m => m.id === id);
    if (selectedMeal) selectedMeal.amount += +amount;
    else selectedMeals.push({ id, amount: +amount });

    // console.log(selectedMeals);
  };

  const increaseMealHandler = id => {};

  const decreaseMealHandler = id => {};

  const displayTotalAmount = pizzas => {};

  return (
    <CartContext.Provider
      value={{
        meals,
        selectedMeals,
        onAddMeal: addMealHandler,
        onIncreaseMeal: increaseMealHandler,
        onDecreaseMeal: decreaseMealHandler,
        displayTotalAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
