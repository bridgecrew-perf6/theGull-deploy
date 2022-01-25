import "./ProductDetailsPage.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCollectionItem } from "../../redux/shop/shopSelectors";
import { addItem } from "../../redux/cart/cartActions";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { addCommentToCollectionItem } from "../../redux/shop/shopActions";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function ProductDetailsPage() {
  const { collectionId, productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(selectCollectionItem(collectionId, productId))[0];
  const user = useSelector(selectCurrentUser);
  console.log(user);
  console.log(product);

  function handleSubmit(e) {
    e.preventDefault();

    const comment = {
      _id: uuidv4(),
      productId: product._id,
      comment: e.target.comment.value,
      name: user.username,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/shop/comment`, {
        id: productId,
        comments: [...product.comments, comment],
      })
      .then((res) => console.log(res.data));

    dispatch(addCommentToCollectionItem(comment));
    e.target.reset();
  }

  return (
    <section>
      <div className="product-details__wrapper">
        <h1 className="product-details__page-title">Product details</h1>
      </div>

      <article className="product-details">
        <div className="product-details__container">
          <img
            src={product.image}
            alt={product.name}
            className="product-details__image"
          />
          <div className="product-details__info">
            <h2 className="product-details__title">{product.name}</h2>
            <p className="product-details__copy">{product.description}</p>
            <p className="product-details__copy product-details__copy--price">
              ${product.price}
            </p>
            <button
              className="product-details__button"
              onClick={() => dispatch(addItem(product))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </article>
      <section className="comments">
        <h3 className="comments__title">Comments</h3>
        {product.comments.map((comment) => (
          <article className="comment-card" key={comment._id}>
            <p className="comment-card__text">{comment.comment}</p>
            <p className="comment-card__name">{comment.name}</p>
          </article>
        ))}
        {user && (
          <form className="comments__form" onSubmit={handleSubmit}>
            <textarea
              cols="50"
              rows="4"
              name="comment"
              id="comment"
              className="comments__text-area"
              maxlength="200"
              minlength="5"
              placeholder="Add a new comment"
            />

            <button className="comments__button">comment</button>
          </form>
        )}
      </section>
    </section>
  );
}
