import Cart from "../Pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";

const CartLayout = () => {
    return (
        <main className="layout layout--cart">
            <Routes>
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    )
}

export default CartLayout;