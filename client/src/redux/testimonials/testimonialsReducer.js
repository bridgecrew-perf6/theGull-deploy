const INITIAL_STATE = {
  testimonialItems: null,
  isFetching: false,
  errorMessage: "",
};

const testimonialsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TESTIMONIALS_START":
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case "FETCH_TESTIMONIALS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        testimonialItems: action.payload,
      };
    case "FECTH_TESTIMONIALS_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default testimonialsReducer;
