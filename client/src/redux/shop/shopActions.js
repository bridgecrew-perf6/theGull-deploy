import axios from "axios";

export const fetchCollectionsStart = () => ({
  type: "FETCH_COLLECTIONS_START",
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: "FETCH_COLLECTIONS_SUCCESS",
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: "FETCH_COLLECTIONS_FAILURE",
  payload: errorMessage,
});

// export const fetchCollectionItem = productId => ({
//   type: "FETCH_COLLECTION_ITEM",
//   payload: productId,
// });

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    axios(`${process.env.REACT_APP_SERVER_URL}/shop`)
      .then((response) => {
        const collections = response.data;
        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
  };
};

export const addCommentToCollectionItem = (comment) => ({
  type: "ADD_COMMENT_TO_COLLECTION_ITEM",
  payload: comment,
});
