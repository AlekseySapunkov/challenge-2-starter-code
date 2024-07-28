import MealItemForm from "../UI/MealItemForm";
import styles from "./MealItem.module.css";
const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal} id={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
};
export default MealItem;
