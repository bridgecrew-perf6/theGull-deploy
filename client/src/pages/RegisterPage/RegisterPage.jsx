import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./RegisterPage.scss";

export default function RegisterPage() {
  return (
    <main className="register">
      <SignUp />
      <SignIn />
    </main>
  );
}
