import { Component } from "react";
import "./SignUp.scss";

export default class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });

    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <main className="sign-up">
        <h1 className="sign-up__title">Sign up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="sign-up__form">
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

          <div className="sign-up__form">
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

          <div className="sign-up__form">
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

          <div className="sign-up__form">
            <input
              className="sign-up__form-input"
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
      </main>
    );
  }
}
