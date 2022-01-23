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
    default:
      return state;
  }
};

export default shopReducer;
