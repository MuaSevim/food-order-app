import styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={styles.meal}>
      <div className={styles.info}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
    </li>
  );
};

export default MealItem;
