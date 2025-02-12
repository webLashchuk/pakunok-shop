import CartItem from "../../Components/CartItem/CartItem";
import { toggleWishList } from "../../store/reducers/wishlistReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Cart = () => {
    let dispatch = useDispatch();
    let cartItems = useSelector(state => state.cart.products);

    const handleToggleWishList = (product) => {
        dispatch(toggleWishList(product));
    };

    return (
        <div className="layout--cart">
            <ul>
                {cartItems.map((product, index) => (
                    <CartItem 
                        key={product.id}
                        product={product} 
                        index={index} 
                        toggleWishListHandler={handleToggleWishList} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default Cart;
