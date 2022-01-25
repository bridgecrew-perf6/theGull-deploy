import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollectionCategory } from "../../redux/shop/shopSelectors";
import "./CollectionPage.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function CollectionPage() {
  const { collectionId } = useParams();

  const collection = useSelector(selectCollectionCategory(collectionId));

  return (
    <main className="collection-page">
      <h1 className="collection-page__title">{collectionId}</h1>
      <div className="collection-page__container">
        {collection &&
          collection.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </main>
  );
}
