import s from "./Catalog.module.scss";
import { fetchProducts } from "../../store/reducers/catalogReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";

const Catalog = () => {
    let dispatch = useDispatch();
    const { catalog, status, error } = useSelector(state => state.catalog);

    useEffect(() => {
        dispatch(fetchProducts()); 
    }, [dispatch]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <div>
            <section>    
                <ul className={s.list}>
                    {catalog.map((product) => {
console.log(product);
                        return <ProductItem 
                            product={product} 
                            key={product.id}
                        />
                    }
                    )}
                </ul>
            </section>
        </div>
    );
}

export default Catalog;