import { Component } from "react";
import "./SignIn.scss";

export default class SignIp extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section className="sign-in">
        <h1 className="sign-in__title">Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="sign-in__container">
            <input
              className="sign-in__form-input"
              onChange={this.handleChange}
              type="email"
              name="email"
              required
            />
            <label className={`${email.length && "shrink"} sign-up__label`}>
              Email
            </label>
          </div>
          <div className="sign-in__container">
            <input
              className="sign-in__form-input"
              onChange={this.handleChange}
              type="password"
              name="password"
              required
            />
            <label className={`${password.length && "shrink"} sign-up__label`}>
              Password
            </label>
          </div>

          <div className="sign-in__buttons">
            <button type="submit" className="sign-in__button">
              Enter
            </button>
            <button className="sign-in__button">Sign in with google</button>
          </div>
        </form>
      </section>
    );
  }
}
