import Banner from "../../components/Banner/Banner";
import DirectoryCard from "../../components/DirectoryCard/DirectoryCard";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <main className="main">
      <Banner />
      <div className="main__cards">
        <div className="main__container">
          <DirectoryCard category="bicycles" />
        </div>
        <div className="main__container">
          <DirectoryCard category="tents" />
          <DirectoryCard category="backpacks" />
        </div>
      </div>
    </main>
  );
}
