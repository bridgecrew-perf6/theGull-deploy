import "./CheckoutItem.scss";
import { useDispatch } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/cartActions";

const CheckoutItem = ({ cartItem }) => {
  const { name, image, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <article className="checkout-item">
      <div className="checkout-item__container">
        <img src={image} alt="item" className="checkout-item__image" />
        <div className="checkout-item__details">
          <span className="checkout-item__name">{name}</span>
          <div className="checkout-item__detail">
            <span>Price:</span>
            <span>$ {price}</span>
          </div>

          <div className="checkout-item__detail checkout-item__detail--quantity">
            <span>Quantity: </span>
            <div
              className="arrow"
              onClick={() => dispatch(removeItem(cartItem))}
            >
              &#10094;
            </div>
            <span className="checkout-item__quantity">{quantity}</span>
            <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
              &#10095;
            </div>
          </div>

          <div className="checkout-item__detail">
            <button
              className="checkout-item__button"
              onClick={() => dispatch(clearItem(cartItem))}
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CheckoutItem;
