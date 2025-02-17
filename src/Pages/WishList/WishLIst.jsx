import s from "./WishList.module.scss";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { useSelector } from "react-redux";

const WishList = () => {
    let productsInWishList = useSelector(state => state.wishlist.productsInWishList);

    return (
        <section className="section">
                <ul className={s.list}>
                    {productsInWishList.length > 0 ? (productsInWishList.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))):(<p>Wish list is empty</p>)}
                </ul>
        </section>  
    )
}

export default WishList;