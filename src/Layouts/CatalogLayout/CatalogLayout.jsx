import Aside from "../../Components/Aside/Aside";
import Shop from "../../Pages/Shop/Shop";

const CatalogPage = () => {
    return (
        <main className="layout">
            <div className="flex-wrapper">
                <Aside />
                <Shop />
            </div>
        </main>
    )
}

export default CatalogPage;