import { createRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminPage.scss";

export default function AdminPage() {
  const formRef = createRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data needs to be sent as a FormData object because
    // we are sending an image file and not just raw json
    const formData = new FormData();
    formData.append("category", e.target.category.value);
    formData.append("name", e.target.name.value);
    formData.append("price", e.target.price.value);
    formData.append("description", e.target.description.value);
    formData.append("thumbnail", e.target.thumbnail.files[0]);

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/shop/upload`, formData, {
        withCredentials: true,
      })
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <main className="admin">
      <h1 className="admin__title">Admin Panel</h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="form"
      >
        <div className="form__container">
          <div className="form__section">
            <div className="form__radio">
              <input
                className="form__radio-input"
                type="radio"
                name="category"
                value="bicycles"
                id="radio-bicycles"
              />
              <label
                className="
                    form__radio-label form__radio-label--bicycles
                  "
                htmlFor="radio-bicycles"
              >
                Bicycles
              </label>

              <input
                className="form__radio-input"
                type="radio"
                name="category"
                value="tents"
                id="radio-tents"
              />
              <label
                className="
                    form__radio-label form__radio-label--tents
                  "
                htmlFor="radio-tents"
              >
                Tents
              </label>
              <input
                className="form__radio-input"
                type="radio"
                name="category"
                value="backpacks"
                id="radio-backpacks"
              />
              <label
                className="
                    form__radio-label form__radio-label--backpacks
                  "
                htmlFor="radio-backpacks"
              >
                Backpacks
              </label>
            </div>
          </div>
          <div>
            <div className="form__section">
              <label htmlFor="name" className="form__section-title">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form__input"
              />
            </div>
            <div className="form__section">
              <label htmlFor="price" className="form__section-title">
                Price
              </label>
              <input
                type="number"
                step="0.01"
                id="price"
                name="price"
                className="form__input"
              />
            </div>
            <div className="form__section">
              <label
                htmlFor="product-description"
                className="form__section-title"
              >
                Description
              </label>
              <textarea
                cols="50"
                rows="4"
                name="description"
                id="product-description"
                className="form__text-area"
                maxLength="200"
                minLength="5"
                placeholder="Add product's description"
              />
            </div>
            <div className="form__section">
              <label className="form__button form__button--image-upload">
                Product image
                <input type="file" name="thumbnail" accept="image/*" />
              </label>
            </div>
          </div>
        </div>

        <footer className="form__footer">
          <button type="submit" className="form__button">
            Publish
          </button>

          <button
            onClick={() => navigate("/")}
            className="form__button form__button--cancel"
          >
            Cancel
          </button>
        </footer>
      </form>
    </main>
  );
}
