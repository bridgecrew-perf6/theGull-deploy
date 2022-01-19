import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
