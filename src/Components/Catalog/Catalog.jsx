import s from "./Catalog.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/reducers/catalogReducer";
import { addToCart } from "../../store/reducers/cartReducer";
import { toggleWishList } from "../../store/reducers/wishlistReducer";
import ProductItem from "../ProductItem/ProductItem";

const Catalog = () => {
    let dispatch = useDispatch();
    let catalog = useSelector(state => state.catalog.catalog);
    let wishlist = useSelector(state => state.wishlist.product);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                dispatch(setProducts(response.data))
            });
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const toggleWishListHandler = (product) => {
        dispatch(toggleWishList(product));
    };

    return (
        <div>
            <div className={s.content}>
                <h1 className="main-title">The best offers for you</h1>
            </div>
            
            <ul className={s.list}>
                {catalog.map((product) => (
                    <ProductItem 
                        product={product} 
                        key={product.id}
                        addToCart={handleAddToCart}
                        toggleWishListHandler={toggleWishListHandler}
                        productsInWishList={wishlist}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Catalog;