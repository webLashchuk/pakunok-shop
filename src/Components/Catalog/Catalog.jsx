import s from "./Catalog.module.scss";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/reducers/catalogReducer";
import ProductItem from "../ProductItem/ProductItem";
import Aside from "../Aside/Aside";

const Catalog = () => {
    let dispatch = useDispatch();
    let catalog = useSelector(state => state.catalog.catalog);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                dispatch(setProducts(response.data))
            });
    }, [dispatch]);

    return (
        <div>
            <div className={s.wrapper}>
                <Aside />

                <section>    
                    <div className={s.content}>
                        <h1 className="main-title">The best offers for you</h1>
                    </div>

                    <ul className={s.list}>
                        {catalog.map((product) => (
                            <ProductItem 
                                product={product} 
                                key={product.id}
                            />
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Catalog;