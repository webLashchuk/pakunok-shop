import CartItem from "../../Components/CartItem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
    let productsInCart = useSelector(state => state.cart.productsInCart);
    
    return (
        <ul>
            {productsInCart.length > 0 ? (
                productsInCart.map((product) => (<CartItem productInCart={product} />))) : (
                    <li><h2>Cart is empty</h2></li>
                )}
        </ul>
    );
};

export default Cart;
