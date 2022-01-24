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
      <div className="checkout__header"></div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem._id} cartItem={cartItem} />
      ))}
      <div className="checkout__total">TOTAL: ${total.toFixed(2)}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </div>
      <StripeButton price={total} />
    </main>
  );
};

export default CheckoutPage;
