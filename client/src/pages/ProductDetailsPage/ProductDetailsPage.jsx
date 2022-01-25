import "./ProductDetailsPage.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCollectionItem } from "../../redux/shop/shopSelectors";
import { addItem } from "../../redux/cart/cartActions";

export default function ProductDetailsPage() {
  const { collectionId, productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(selectCollectionItem(collectionId, productId))[0];

  return (
    <article className="product-details">
      <h1 className="product-details__title">{product.name}</h1>
      <div key={product._id} className="product-details__container">
        <img
          src={product.image}
          alt={product.name}
          className="product-details__image"
        />
        <div className="product-details__info">
          <p className="product-details__copy">{product.description}</p>
          <p className="product-details__copy">${product.price}</p>
          <button
            className="product-details__button"
            onClick={() => dispatch(addItem(product))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
