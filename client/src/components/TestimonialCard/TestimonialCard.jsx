import "./TestimonialCard.scss";

export default function TestimonialCard({ details: { avatar, text, name } }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__container">
        <img src={avatar} alt="avatar" className="testimonial-card__avatar" />
        <p className="testimonial-card__text">{text}</p>
      </div>
      <p className="testimonial-card__name">{name}</p>
    </article>
  );
}
