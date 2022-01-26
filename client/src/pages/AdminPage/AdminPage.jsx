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
    formData.append("description", e.target.description.value);
    formData.append("thumbnail", e.target.thumbnail.files[0]);

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/shop/upload`, formData)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));

    e.target.reset();
  };

  return (
    <main className="main">
      <article className="upload">
        <h1 className="upload__title">Admin Panel</h1>
        <form
          className="form"
          ref={formRef}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form__container">
            <div>
              <label className="upload__custom-image">
                ADD THUMBNAIL IMAGE
                <input type="file" name="thumbnail" accept="image/*" />
              </label>
            </div>
            <div className="upload__container">
              <div>
                <label className="form__label" htmlFor="video-title">
                  ENTER CATEGORY
                </label>
                <input
                  type="text"
                  className="form__input"
                  id="video-title"
                  name="category"
                  placeholder="Add the category of the item"
                />
              </div>
              <div>
                <label className="form__label" htmlFor="video-description">
                  ENTER DESCRIPTION
                </label>
                <textarea
                  cols="50"
                  rows="4"
                  className="form__input"
                  id="video-description"
                  name="description"
                  placeholder="Add a description of the item"
                />
              </div>
            </div>
          </div>
          <footer className="form__footer">
            <div className="upload__publish-button">
              <button className="button--publish">Publish</button>
            </div>
            <button
              onClick={() => navigate("/")}
              className="upload__cancel-button"
              type="button"
            >
              CANCEL
            </button>
          </footer>
        </form>
      </article>
    </main>
  );
}
