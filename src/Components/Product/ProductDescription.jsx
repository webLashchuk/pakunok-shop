import s from "./ProductDescription.module.scss";
import axios from "axios";
import WishListButton from "../WishListButton/WishListButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setProduct } from "../../store/reducers/productReducer";

const ProductDescription = () => {
    let { productId } = useParams();
    let dispatch = useDispatch();
    let product = useSelector(state => state.product.product);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => {
                dispatch(setProduct(response.data))
            });
    }, []);

    return (
        <div className="layout">
            <div className={s.Product}>
                <img className={s.image} src={product.image} alt={product.title} />

                <div className={s.container}>
                    <h1>{product.title}</h1>

                    <h2>{product.price} $</h2>

                    <h2>Category: {product.category}</h2>

                    <p>{product.description}</p>
                    
                    <div className={s.buttons}>
                        <button onClick={()=>{}} className="order-button">
                            Add to cart
                        </button>

                        <WishListButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;