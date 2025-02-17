import WishList from "../../Pages/WishList/WishLIst";
import Aside from "../../Components/Aside/Aside";


const WishListLayout = () => {
    return (
        <main className="layout">
            <div>
                <h1 className="visually-hidden">WishLIst</h1>
            </div>

            <div className="flex-wrapper">
                <Aside />
                <WishList />
            </div>
        </main>
    )
}

export default WishListLayout;
