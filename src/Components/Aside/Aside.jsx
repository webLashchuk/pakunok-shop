import s from "./Aside.module.scss";
import { NavLink } from "react-router-dom";

const Aside = () => {
    return (
        <aside className={s.aside}>

            <h2>Categories</h2>
            <h2>Registration</h2>

            <nav>
                <ul className={s.list}>
                    <li>
                        <NavLink className={s.link} to='/'>Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to='/cart'>Shopping Cart</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to='/wishlist'>Wishlist</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;