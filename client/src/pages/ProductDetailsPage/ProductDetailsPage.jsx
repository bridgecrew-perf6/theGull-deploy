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
    <article key={product._id} className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="product-details__image"
      />
      <div className="product-details__info">
        <p className="product-details__copy">{product.name}</p>
        <p className="product-details__copy">${product.price}</p>
        <p className="product-details__copy">{product.description}</p>
        <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
      </div>
    </article>
  );
}
