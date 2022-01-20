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
          <h3 className="footer__title">Site map</h3>
          <nav>
            <ul>
              <li>
                <Link to="/signin" className="footer__copy">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer__copy">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/shop/bicycles" className="footer__copy">
                  Bicycles
                </Link>
              </li>
              <li>
                <Link to="/shop/tents" className="footer__copy">
                  Tents
                </Link>
              </li>
              <li>
                <Link to="/shop/backpacks" className="footer__copy">
                  Backpacks
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="footer__section">
          <h3 className="footer__title">Business hours</h3>
          <div className="footer__hours">
            <div className="footer__hour">
              <p className="footer__copy">Monday - Friday</p>
              <p className="footer__copy">8h - 16h</p>
            </div>
            <div className="footer__hour">
              <p className="footer__copy">Saturday - Sunday</p>
              <p className="footer__copy">9h - 17h</p>
            </div>
          </div>
        </section>
      </div>
      <p className="copyright">copyright &copy; 2022</p>
    </footer>
  );
}
