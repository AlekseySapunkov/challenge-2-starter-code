import styles from "./MealList.module.css";
import DUMMY_MEALS from "./dummy-meals";
const MealList = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={styles.meals}>
      <ul className={styles.ul}>{mealList}</ul>
    </section>
  );
};
export default MealList;
