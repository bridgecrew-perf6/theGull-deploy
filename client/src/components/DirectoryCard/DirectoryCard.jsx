import { Link } from "react-router-dom";
import "./DirectoryCard.scss";

export default function DirectoryCard({ category }) {
  return (
    <Link to={`/shop/${category}`}>
      <article className="card">
        <div className={`card__img card__img--${category}`}>
          <p className="card__copy">{category}</p>
        </div>
      </article>
    </Link>
  );
}
