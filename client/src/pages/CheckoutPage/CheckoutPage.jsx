import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";
import "./CheckoutPage.scss";
import StripeButton from "../../components/StripeButton/StripeButton";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <main className="checkout">
      <div className="checkout__header">
        <h1 className="checkout__title">Checkout</h1>
      </div>
      <div className="checkout__container">
        <div className="checkout__column">
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem._id} cartItem={cartItem} />
          ))}
        </div>
        <div className="checkout__column checkout__column--right">
          <div className="checkout__sticky">
            <h2 className="checkout__order-summary">Order Summary</h2>
            <div className="checkout__total">
              <span>TOTAL:</span>
              <span> ${total.toFixed(2)}</span>
            </div>
            <StripeButton price={total} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
