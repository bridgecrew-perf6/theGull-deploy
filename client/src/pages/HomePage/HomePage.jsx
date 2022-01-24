import Banner from "../../components/Banner/Banner";
import DirectoryCard from "../../components/DirectoryCard/DirectoryCard";
import "./HomePage.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";
import { fetchTestimonialsStartAsync } from "../../redux/testimonials/testimonialsActions";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
    dispatch(fetchTestimonialsStartAsync());
  }, [dispatch]);

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
      <Testimonials />
    </main>
  );
}
