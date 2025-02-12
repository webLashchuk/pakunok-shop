import s from "./Shop.module.scss";
import Aside from "../../Components/Aside/Aside";
import Catalog from "../../Components/Catalog/Catalog";

const Shop = () => {

    return (
        <div className={s.wrapper}>
            <Aside />
            <Catalog />
        </div>
    )
}

export default Shop;