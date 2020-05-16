import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFecting
)

export const selectErrorMessage = createSelector(
  [selectShop],
  (shop) => shop.errorMessage
)
