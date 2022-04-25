import { useState } from "react";
import axios from "axios";
import "./SignIn.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userActions";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/login`,
      {
        username: email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    console.log(response);

    if (response.data) {
      const { username, email, cart, isAdmin } = response.data;
      dispatch(
        setCurrentUser({
          email,
          username,
          cart,
          isAdmin,
        })
      );
    }

    navigate("/");
  };

  return (
    <section className="sign-in">
      <h1 className="sign-in__title">Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="sign-in__container">
          <input
            className="sign-in__form-input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
          />
          <label className={`${email.length && "shrink"} sign-in__label`}>
            Email
          </label>
        </div>
        <div className="sign-in__container">
          <input
            className="sign-in__form-input sign-in__form-input--password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            required
          />
          <label className={`${password.length && "shrink"} sign-in__label`}>
            Password
          </label>
        </div>

        <div className="sign-in__buttons">
          <button type="submit" className="sign-in__button">
            Enter
          </button>
          <a
            className="sign-in__button"
            href={`${process.env.REACT_APP_SERVER_URL}/auth/google`}
          >
            Sign in with google
          </a>
        </div>
      </form>

      <p className="sign-in__info">
        Admin account <br /> email: admin@thegull.ca <br />
        password: admin
      </p>
    </section>
  );
}
