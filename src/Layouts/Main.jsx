import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import WishList from "../Pages/WishList/WishLIst";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <main className="layout">
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishList />} />
            </Routes>
        </main>
    )
}

export default Main;