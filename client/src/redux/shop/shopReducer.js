const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_COLLECTIONS_START":
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case "FETCH_COLLECTIONS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case "FECTH_COLLECTIONS_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    // case "FETCH_COLLECTION_ITEM":
    //   return {
    //     ...state,
    //     errorMessage: action.payload,
    //   };
    case "ADD_COMMENT_TO_COLLECTION_ITEM":
      return {
        ...state,
        collections: addComment(state.collections, action.payload),
      };
    default:
      return state;
  }
};

export default shopReducer;

export const addComment = (collections, comment) => {
  return collections.map((item) => {
    if (item._id === comment.productId) {
      item.comments.push(comment);
      return item;
    } else {
      return item;
    }
  });
};
