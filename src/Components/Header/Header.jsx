import s from './Header.module.scss';
import logo from '../../assets/images/logo.svg'
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className={s.header}>
            <div className="layout">
                <nav className={s.nav}>
                    <NavLink className={s.link} to="/">
                        <img className={s.logo} src={logo} alt="Shop" />
                    </NavLink>

                    <ul className={s.list}>
                        <li>
                            <NavLink className={s.link} to='/'>Catalog</NavLink>
                        </li>
                        <li>
                            <NavLink className={s.link} to='/cart'>Cart</NavLink>
                        </li>
                        <li>
                            <NavLink className={s.link} to='/wishlist'>Wishlist</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header;