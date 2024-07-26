import Input from "./Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input />
      <button>Добавить</button>
    </form>
  );
};
export default MealItemForm;
