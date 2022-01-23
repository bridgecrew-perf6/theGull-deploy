import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? collections : [])
);

export const selectCollectionCategory = (category) =>
  createSelector([selectCollections], (collections) =>
    collections.filter((item) => item.category === category)
  );

export const selectCollectionItem = (category, itemId) =>
  createSelector([selectCollections], (collections) =>
    collections.filter(
      (item) => item.category === category && item._id === itemId
    )
  );

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
