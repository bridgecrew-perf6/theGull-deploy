import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import cart from "../../assets/icons/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import "./Header.scss";
import axios from "axios";
import { setCurrentUser } from "../../redux/user/userActions";

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const logout = async () => {
    await axios(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, {
      withCredentials: true,
    });

    dispatch(setCurrentUser(null));
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <img src={logo} alt="Logo" className="header__logo" />
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
          {!currentUser ? (
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
          ) : (
            <span onClick={logout} className="header__nav-item">
              Logout
            </span>
          )}
          <li>
            <Link to="/checkout">
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
