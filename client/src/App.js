import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Footer from "./components/Footer/Footer";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
