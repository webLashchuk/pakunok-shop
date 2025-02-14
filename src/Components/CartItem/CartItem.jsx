import s from './CartItem.module.scss';
import WishListButton from '../WishListButton/WishListButton';
import { useDispatch } from 'react-redux';
import { removeProductFromCart, incrementQuantity, decrementQuantity } from "../../store/reducers/cartReducer";
import { useNavigate } from 'react-router';
import Quantity from "../Quantity/Quantity";

const CartItem = ({ productInCart }) => {
    let dispatch = useDispatch();
    const navigate = useNavigate();

    const handleIncrement = () => {
        dispatch(incrementQuantity(productInCart.id));
    };

    const handleDecrement = () => {
        dispatch(decrementQuantity(productInCart.id));
    };

    const handleRemove = () => {
        dispatch(removeProductFromCart(productInCart.id));
    };

    const handleShowMore = () => {
        navigate(`/products/${productInCart.id}`);
    };

    return (
     <li>        
        <div className={s.cart} >
                <img className={s.image} src={productInCart.image} alt={productInCart.title} />

            <div className={s.content}>
                <h2 className={s.title}>{productInCart.title}</h2>
                    <div className={s.container}>
                    <Quantity value={productInCart.counter} increment={handleIncrement} decrement={handleDecrement} />
                    <p className={s.price}>{(productInCart.price * productInCart.counter).toFixed(2)} $</p>
                </div>
                    
                <div className={s.buttons}>
                    <button  className={s.button} onClick={handleShowMore}>Show more...</button>
                    <button  className={s.button} onClick={handleRemove}>Remove</button>

                    <WishListButton />
                </div>
            </div>
        </div>
    </li>
    )
}

export default CartItem;