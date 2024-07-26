import styles from "./MealList.module.css";
import DUMMY_MEALS from "./dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const MealList = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul className={styles.ul}>{mealList}</ul>
      </Card>
    </section>
  );
};
export default MealList;
