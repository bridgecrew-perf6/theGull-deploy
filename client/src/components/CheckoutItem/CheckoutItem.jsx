import "./CheckoutItem.scss";
import { useDispatch } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/cartActions";

const CheckoutItem = ({ cartItem }) => {
  const { name, image, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" className="checkout-item__image" />
      </div>
      <div className="checkout-item__details">
        <div className="checkout-item__detail">
          <span>Product:</span>
          <span>{name}</span>
        </div>
        <div className="checkout-item__detail checkout-item__detail--quantity">
          <span>Quantity: </span>
          <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
            &#10094;
          </div>
          <span>{quantity}</span>
          <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
            &#10095;
          </div>
        </div>
        <div className="checkout-item__detail">
          <span>Price:</span>
          <span>$ {price}</span>
        </div>
        <div className="checkout-item__detail">
          <span> Remove:</span>
          <span className="arrow" onClick={() => dispatch(clearItem(cartItem))}>
            &#10005;
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
