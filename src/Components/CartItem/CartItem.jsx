import s from './CartItem.module.scss';
import WishListButton from '../WishListButton/WishListButton';

const CartItem = ({ product, index, toggleWishListHandler }) => {

    return (
     <li key={index}>        
        <div className={s.cart} >
                <img className={s.image} src={product.image} alt={product.title} />

            <div className={s.content}>
                <h2 className={s.title}>{product.title}</h2>
                <div className={s.container}>
                    <p className={s.price}>{(product.price * product.quantity).toFixed(2)} $</p>
                </div>
                    
                <div className={s.buttons}>
                    <button  className={s.button}>Show more...</button>
                    <button  className={s.button}>Remove</button>

                    <WishListButton toggleWishListHandler={toggleWishListHandler} />
                </div>
            </div>
        </div>
    </li>
    )
}

export default CartItem;