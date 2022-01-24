import "./Testimonials.scss";
import { useSelector } from "react-redux";
import { selectTestimonialItems } from "../../redux/testimonials/testimonialsSelectors";
import { useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

export default function Testimonials() {
  const testimonials = useSelector(selectTestimonialItems);
  const [slideNumber, setSlideNumber] = useState(0);
  function nextSlide() {
    if (slideNumber === testimonials.length - 1) {
      setSlideNumber(0);
    } else {
      setSlideNumber(slideNumber + 1);
    }
  }
  function previousSlide() {
    if (slideNumber === 0) {
      setSlideNumber(testimonials.length - 1);
    } else {
      setSlideNumber(slideNumber - 1);
    }
  }
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__card">
          <span onClick={previousSlide} className="testimonials__arrow">
            &#9664;
          </span>
          {testimonials && (
            <TestimonialCard details={testimonials[slideNumber]} />
          )}
          <span onClick={nextSlide} className="testimonials__arrow">
            &#9654;
          </span>
        </div>
      </div>
    </section>
  );
}
