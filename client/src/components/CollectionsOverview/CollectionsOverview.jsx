import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { useSelector } from "react-redux";
import "./CollectionsOverview.scss";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";

export default function CollectionsOverview() {
  const collections = useSelector(selectCollectionsForPreview);
  console.log(collections);
  const bicycles = collections.filter(
    (collection) => collection.category === "bicycles"
  );

  return (
    <section className="products">
      <CollectionPreview products={bicycles} />
      {/* <CollectionPreview />
      <CollectionPreview /> */}
    </section>
  );
}
