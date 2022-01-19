import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Welcome to The Gull</h1>} />
      </Routes>
    </>
  );
}

export default App;
