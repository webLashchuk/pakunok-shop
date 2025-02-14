import style from "./ProductItem.module.scss";
import WishListButton from "../WishListButton/WishListButton";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addProductsToCart } from "../../store/reducers/cartReducer";

const ProductItem = ({ product }) => {
    const navigate = useNavigate();
    let dispatch = useDispatch();

    const showMoreHandler = () => {
        navigate(`/products/${product.id}`)
    }

    const addProductToCartHandler = () => {
        dispatch(addProductsToCart(product))
    }

    return (
        <li className={style.item}>
            <div className={style.product}>
                <WishListButton />
                
                <img className={style.image} src={product.image} alt={product.title} />

                <div>
                    <h2 className={style.title}>{product.title}</h2>
                    <p className={style.price}>{product.price} $</p>
                </div>

                <div className={style.buttons}>
                    <button className={style.button} onClick={showMoreHandler}>Show more...</button>
                    <button className={style.button} onClick={addProductToCartHandler}>Add to Cart</button>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;