import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollectionCategory } from "../../redux/shop/shopSelectors";
import "./CollectionPage.scss";

export default function CollectionPage() {
  const { collectionId } = useParams();

  const collection = useSelector(selectCollectionCategory(collectionId));

  return (
    <main className="bicycles">
      {collection &&
        collection.map((bicycle) => (
          <Link to={`/shop/${collectionId}/${bicycle._id}`} key={bicycle._id}>
            <article className="bicycles__card">
              <img
                src={bicycle.image}
                alt={bicycle.name}
                className="bicycles__image"
              />
              <div className="bicycles__info">
                <p className="bicycles__copy">{bicycle.name}</p>
                <p className="bicycles__copy">${bicycle.price}</p>
              </div>
            </article>
          </Link>
        ))}
    </main>
  );
}
