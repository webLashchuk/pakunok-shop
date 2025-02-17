import s from "./ProductDescription.module.scss";
import WishListButton from "../WishListButton/WishListButton";
import { useDispatch, useSelector } from "react-redux";
import { addProductsToCart } from "../../store/reducers/cartReducer";
import { toggleWishList } from "../../store/reducers/wishlistReducer";
import { fetchProduct, resetProduct } from "../../store/reducers/productReducer";
import { useEffect } from "react";
import { useParams } from "react-router";

const ProductDescription = () => {
    const { productId } = useParams();
    let dispatch = useDispatch();
    let product = useSelector(state => state.product.product);

    useEffect(() => {
        dispatch(resetProduct());
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);

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
        <div className="layout">
            <div className={s.Product}>
                <img className={s.image} src={product.image} alt={product.title} />

                <div className={s.container}>
                    <h2>{product.title}</h2>

                    <p>{product.price} ₴</p>

                    <p>Category: {product.category}</p>

                    <p>{product.description}</p>
                    
                    <div className={s.buttons}>
                        <button onClick={addProductToCartHandler} className={s.button}>
                            Add to cart
                        </button>

                        <WishListButton toggleWishListHandler={toggleWishListHandler} isInWishList={isInWishList} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;