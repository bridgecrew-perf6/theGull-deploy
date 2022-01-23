import ProductCard from "../ProductCard/ProductCard";

import "./CollectionPreview.scss";

export default function CollectionPreview({ products }) {
  return (
    <div className="collection-preview">
      <h1 className="category">{products[0].category}</h1>
      <div className="preview">
        {products
          .filter((item, idx) => idx < 3)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}
