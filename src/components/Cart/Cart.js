import Modal from "../UI/Modal"
import styles from "./Cart.module.css"
import { useContext } from "react"
import CartContext from "../../store/cart-context"
const Cart = (props) => {
    const cartContext = useContext(CartContext)
    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item)=>{
                return <li>{item.name}</li>
            })}
        </ul>
    )

    return <Modal onHideCart ={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span> 3.99</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
            <button className={styles.button}>Заказать</button>
        </div>
    </Modal>
}
export default Cart