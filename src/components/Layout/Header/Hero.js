import styles from "./Hero.module.css";
import pizzaImg from "../../../assets/pizzaImg.jpg";

const Hero = (props) => {
  return (
    <section className={styles.hero}>
      <img
        src={pizzaImg}
        alt="A pizza just came out of furnace with tomato "
        className={styles.img}
      />
    </section>
  );
};

export default Hero;
