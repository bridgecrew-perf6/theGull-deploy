import axios from "axios";

export const fetchTestimonialsStart = () => ({
  type: "FETCH_TESTIMONIALS_START",
});

export const fetchTestimonialsSuccess = (testimonials) => ({
  type: "FETCH_TESTIMONIALS_SUCCESS",
  payload: testimonials,
});

export const fetchTestimonialsFailure = (errorMessage) => ({
  type: "FETCH_TESTIMONIALS_FAILURE",
  payload: errorMessage,
});

export const fetchTestimonialsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchTestimonialsStart());
    axios(`${process.env.REACT_APP_SERVER_URL}/testimonials`)
      .then((response) => {
        const testimonials = response.data;
        dispatch(fetchTestimonialsSuccess(testimonials));
      })
      .catch((err) => dispatch(fetchTestimonialsFailure(err.message)));
  };
};
