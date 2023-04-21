import { useContext, useRef } from 'react';
import CartContext from '../../../store/cart-context';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = props => {
  const mealCtx = useContext(CartContext);

  const mealRef = useRef();

  const newMealHandler = e => {
    e.preventDefault();

    const amount = +mealRef.current.value;

    // const amount = +mealRef.current.getValue();
    const item = { ...props.item, amount };
    mealCtx.addItem(item);
    mealRef.current.value = '1';
  };

  const inputValues = {
    id: props.item.id,
    type: 'number',
    min: '1',
    max: '10',
    step: '1',
    defaultValue: '1',
    ref: mealRef,
  };

  return (
    <form className={styles.form} onSubmit={newMealHandler}>
      <Input label="Amount" input={inputValues} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
