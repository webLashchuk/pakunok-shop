import Cart from "../../Pages/Cart/Cart";


const CartLayout = () => {
    return (
        <main className="layout layout--cart">
            <div>
                <h1 className="visually-hidden">Cart</h1>
            </div>
            
            <Cart />
        </main>
    )
}

export default CartLayout;

