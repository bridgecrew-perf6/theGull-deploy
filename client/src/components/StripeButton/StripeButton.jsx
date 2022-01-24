import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../redux/cart/cartActions";
import axios from "axios";

const StripeButton = ({ price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J1ygrHFbVyHy4laPewnbJtoyazW1Y7GURUtSbrVeuiM1Zq29wvo6nOkvY8vnoZtgz2JQuarjDYniCb8RXbcuvOy00HKGlK9B3";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(res => {
        alert("Payment Successful");
      })
      .catch(err => {
        console.log("Payment error", JSON.parse(err));
      });

    dispatch(emptyCart());
    navigate("/");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Gull"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
