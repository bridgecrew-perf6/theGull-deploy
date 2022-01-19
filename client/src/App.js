import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
