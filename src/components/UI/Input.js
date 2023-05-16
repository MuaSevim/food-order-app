import { useRef, forwardRef, useImperativeHandle } from 'react';
import styles from './Input.module.css';

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const getValue = () => inputRef.current.value;
  const resetValue = () => (inputRef.current.value = 1);
  const getValue1 = () => inputRef.current.value;
  console.log(getValue1);

  useImperativeHandle(ref, () => {
    return { getValue, resetValue };
  });

  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
});

export default Input;
