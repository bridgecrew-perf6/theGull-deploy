import { useSelector } from "react-redux";
import {
  selectCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shopSelectors";
import { Routes, Route } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import "./ShopPage.scss";
import { lazy, Suspense } from "react";

const CollectionsOverview = lazy(() =>
  import("../../components/CollectionsOverview/CollectionsOverview")
);
const CollectionPage = lazy(() => import("../CollectionPage/CollectionPage"));
const ProductDetailsPage = lazy(() =>
  import("../ProductDetailsPage/ProductDetailsPage")
);

export default function ShopPage() {
  const collectionFetching = useSelector(selectCollectionFetching);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  return (
    <main>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={<CollectionsOverview isLoading={collectionFetching} />}
          />
          <Route
            path=":collectionId"
            element={<CollectionPage isLoading={!isCollectionsLoaded} />}
          />
          <Route
            path=":collectionId/:productId"
            element={<ProductDetailsPage isLoading={!isCollectionsLoaded} />}
          />
        </Routes>
      </Suspense>
    </main>
  );
}
