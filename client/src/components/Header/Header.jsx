import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import cart from "../../assets/icons/cart.svg";
import "./Header.scss";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="header__nav-list">
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                "header__nav-item" +
                (isActive ? " header__nav-item--active" : "")
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                "header__nav-item" +
                (isActive ? " header__nav-item--active" : "")
              }
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <Link to="/cart">
              <img src={cart} alt="shopping cart" />
            </Link>
          </li>
        </ul>
        <span
          onClick={() => setDarkMode(!darkMode)}
          className={`header__mode ${
            darkMode ? "header__mode--dark" : "header__mode--light"
          }`}
        />
      </nav>
    </header>
  );
}
