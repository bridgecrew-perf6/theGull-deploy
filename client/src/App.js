import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.scss";
import Footer from "./components/Footer/Footer";
import Spinner from "./components/Spinner/Spinner";
import AdminPage from "./pages/AdminPage/AdminPage";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelectors";
import { setCurrentUser } from "./redux/user/userActions";
import { useEffect, lazy, Suspense } from "react";
import axios from "axios";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/CheckoutPage"));

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
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signin"
            element={
              currentUser ? <Navigate to="/" replace /> : <RegisterPage />
            }
          />
          <Route
            path="/admin"
            element={
              currentUser?.isAdmin ? <AdminPage /> : <Navigate to="/" replace />
            }
          />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
