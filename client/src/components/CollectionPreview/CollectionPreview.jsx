import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

import "./CollectionPreview.scss";

export default function CollectionPreview({ products }) {
  return (
    <div className="collection-preview">
      <Link to={`/shop/${products[0].category}`}>
        <h1 className="collection-preview__title">{products[0].category}</h1>
      </Link>
      <div className="collection-preview__container">
        {products
          .filter((item, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}
