import s from "./ProductItem.module.scss";
import WishListButton from "../WishListButton/WishListButton";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addProductsToCart } from "../../store/reducers/cartReducer";
import { toggleWishList } from "../../store/reducers/wishlistReducer";

const ProductItem = ({ product }) => {
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const showMoreHandler = () => {
        navigate(`/products/${product.id}`)
    }

    const isInWishList = useSelector(state =>
        state.wishlist.productsInWishList.some(item => item.id === product.id)
    );

    const toggleWishListHandler = () => {
        dispatch(toggleWishList(product));
    };

    const addProductToCartHandler = () => {
        dispatch(addProductsToCart(product))
    }

    return (
        <li className={s.item}>
            <div className={s.product}>
                <WishListButton toggleWishListHandler={toggleWishListHandler} isInWishList={isInWishList} />
                
                <img className={s.image} src={product.image} alt={product.title} />

                    <h2 className={s.title}>{product.title}</h2>
                    <p className={s.price}>{product.price} ₴</p>

                <div className={s.buttons}>
                    <button className={s.button} onClick={showMoreHandler}>Show more...</button>
                    <button className={s.button} onClick={addProductToCartHandler}>Add to Cart</button>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;