import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { setCurrentUser } from "../../redux/user/userActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import logo from "../../assets/logo/logo.png";
import cart from "../../assets/icons/cart.svg";
import "./Header.scss";

export default function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const cartItemCount = useSelector(selectCartItemsCount);

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
          {currentUser && (
            <li>
              Welcome, <span className="username">{currentUser.username}</span>
            </li>
          )}
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
          {currentUser?.isAdmin && (
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  "header__nav-item" +
                  (isActive ? " header__nav-item--active" : "")
                }
              >
                Admin
              </NavLink>
            </li>
          )}
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
            <Link to="/checkout" className="header__cart">
              <img src={cart} alt="shopping cart" />
              <span className="header__cart-count">({cartItemCount})</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
