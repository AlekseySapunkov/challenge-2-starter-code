import CartContext from "./cart-context";
const CartContextProvider = (props) => {

    const addItemHandler = (item) => {}
    const removeItemHandler = (id) => {}
    const cartContext = {
        items: [],
        totalAmount:0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContextProvider value={cartContext}>{props.children}</CartContextProvider>
}
export default CartContextProvider;

