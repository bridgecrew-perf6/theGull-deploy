import { Link } from "react-router-dom";
import "./ProductCard.scss";

export default function ProductCard({ product }) {
  return (
    <Link to={`/shop/${product.category}/${product._id}`} key={product._id}>
      <article className="product__card">
        <img
          src={product.image}
          alt={product.name}
          className="product__image"
        />
        <div className="product__info">
          <p className="product__copy">{product.name}</p>
          <p className="product__copy">${product.price}</p>
        </div>
      </article>
    </Link>
  );
}
