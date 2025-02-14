import Catalog from "../../Components/Catalog/Catalog";
import { Routes, Route } from "react-router";
import ProductDescription from "../../Components/Product/ProductDescription";

const Shop = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/products/:productId" element={<ProductDescription />} />
            </Routes>
        </div>
    )
}

export default Shop;