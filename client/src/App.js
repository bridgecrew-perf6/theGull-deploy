import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.scss";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import BicyclesPage from "./pages/BicyclesPage/BicyclesPage";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelectors";
import { setCurrentUser } from "./redux/user/userActions";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/auth/userInfo`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          dispatch(
            setCurrentUser({
              email: res.data.email,
              username: res.data.username,
              cart: res.data.cart,
              isAdmin: res.data.isAdmin,
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" replace /> : <RegisterPage />}
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/shop/bicycles" element={<BicyclesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
