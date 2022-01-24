import { createSelector } from "reselect";

const selectTestimonials = (state) => state.testimonials;

export const selectTestimonialItems = createSelector(
  [selectTestimonials],
  (testimonials) => testimonials.testimonialItems
);

export const selectTestimonialsFetching = createSelector(
  [selectTestimonials],
  (testimonials) => testimonials.isFetching
);

export const selectIsTestimonialsLoaded = createSelector(
  [selectTestimonials],
  (testimonials) => !!testimonials.testimonialItems
);
