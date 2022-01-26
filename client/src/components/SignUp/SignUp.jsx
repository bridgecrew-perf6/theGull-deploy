import { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/userActions";
import axios from "axios";
import "./SignUp.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    registered: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const resgisterResponse = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/register`,
        {
          username: displayName,
          email,
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
        }
      );
      this.setState({ registered: true });

      const loginResponse = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/auth/login`,
        {
          username: email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (loginResponse.data) {
        const { username, email, cart, isAdmin } = loginResponse.data;
        this.props.setCurrentUser({
          email,
          username,
          cart,
          isAdmin,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { displayName, email, password, confirmPassword, registered } =
      this.state;

    return registered ? (
      <Navigate to="/" replace />
    ) : (
      <section className="sign-up">
        <h1 className="sign-up__title">Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="sign-up__container">
            <input
              className="sign-up__form-input"
              onChange={this.handleChange}
              type="text"
              name="displayName"
              required
            />
            <label
              className={`${displayName.length && "shrink"} sign-up__label`}
            >
              Display name
            </label>
          </div>

          <div className="sign-up__container">
            <input
              className="sign-up__form-input"
              onChange={this.handleChange}
              type="email"
              name="email"
              required
            />
            <label className={`${email.length && "shrink"} sign-up__label`}>
              Email
            </label>
          </div>

          <div className="sign-up__container">
            <input
              className="sign-up__form-input sign-up__form-input--password"
              onChange={this.handleChange}
              type="password"
              name="password"
              required
            />
            <label className={`${password.length && "shrink"} sign-up__label`}>
              Password
            </label>
          </div>

          <div className="sign-up__container">
            <input
              className="sign-up__form-input sign-up__form-input--password"
              onChange={this.handleChange}
              type="password"
              name="confirmPassword"
              required
            />
            <label
              className={`${confirmPassword.length && "shrink"} sign-up__label`}
            >
              Confirm password
            </label>
          </div>

          <button className="sign-up__button" type="submit">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatch = {
  setCurrentUser,
};

export default connect(null, mapDispatch)(SignUp);
