import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collection
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collection =>
        collection ? Object.keys(collection).map(key => collection[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        collection => (collection ? collection[collectionUrlParam] : null)
    ));

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collection
)