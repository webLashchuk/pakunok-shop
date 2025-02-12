import style from "./ProductItem.module.scss";
import WishListButton from "../WishListButton/WishListButton";

const ProductItem = ({ product, addToCart, toggleWishListHandler, productsInWishList }) => {

    return (
        <li className={style.item}>
            <div className={style.product}>
                <WishListButton toggleWishListHandler={toggleWishListHandler} />
                
                <img className={style.image} src={product.image} alt={product.title} />

                <div>
                    <h2 className={style.title}>{product.title}</h2>
                    <p className={style.price}>{product.price} $</p>
                </div>

                <div className={style.buttons}>
                    <button className={style.button}>Show more...</button>
                    <button className={style.button} onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;