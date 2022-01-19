import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__section">
          <h3 className="footer__title">Contact</h3>
          <p className="footer__copy">email</p>
          <p className="footer__copy">phone</p>
          <Link to="/">
            <img src={logo} alt="Logo" className="footer__logo" />
          </Link>
        </section>
        <section className="footer__section">
          <h3 className="footer__title">Site Map</h3>
          <Link to="/signin">
            <p className="footer__copy">Sign In</p>
          </Link>
          <Link to="/shop">
            <p className="footer__copy">Shop</p>
          </Link>
          <Link to="/shop/bicycles">
            <p className="footer__copy">Bicycles</p>
          </Link>
          <Link to="/shop/tents">
            <p className="footer__copy">Tents</p>
          </Link>
          <Link to="/shop/backpacks">
            <p className="footer__copy">Backpacks</p>
          </Link>
        </section>
        <section className="footer__section">
          <h3 className="footer__title">Business Hours</h3>
          <p className="footer__copy">Monday - Friday</p>
          <p className="footer__copy">8h - 16h</p>
          <p className="footer__copy">Saturday - Sunday</p>
          <p className="footer__copy">9h - 17h</p>
        </section>
      </div>
      <p className="copyright">copyright &copy; 2022</p>
    </footer>
  );
}
