import Modal from "../UI/Modal"
import styles from "./Cart.module.css"
import { useContext } from "react"
import CartContext from "../../store/cart-contex"
import CartItem from "./CartItem"
const Cart = (props) => {
    const cartContext = useContext(CartContext)
    const cartAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0
    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item)=>{
                return <CartItem key ={item.id} name={item.name} amount={item.amount} price = {item.price}/>
            })}
        </ul>
    )

    return <Modal onHideCart ={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span> {cartAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Закрыть</button>
            {hasItems && <button className={styles.button}>Заказать</button>}
        </div>
    </Modal>
}
export default Cart