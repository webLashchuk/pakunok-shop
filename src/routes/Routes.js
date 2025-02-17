import { Routes, Route } from "react-router-dom";
import CatalogLayout from "../Layouts/CatalogLayout/CatalogLayout";
import CartLayout from "../Layouts/CartLayout/CartLayout";
import ProductDescription from "../Components/Product/ProductDescription";
import WishListLayout from "../Layouts/WishListLayout/WishLIstLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<CatalogLayout />} />
            <Route path="/cart" element={<CartLayout />} />
            <Route path="/wishlist" element={<WishListLayout />} />
            <Route path="/products/:productId" element={<ProductDescription />} />
        </Routes>
    )
}

export default AppRoutes;