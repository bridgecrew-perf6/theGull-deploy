import { useState, useEffect } from "react";
import axios from "axios";
import "./BicyclesPage.scss";

export default function BicyclesPage() {
  const [bicycles, setBicycles] = useState(null);
  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVER_URL}/shop/bicycles`).then(
      (response) => setBicycles(response.data)
    );
  }, []);

  return (
    bicycles &&
    bicycles.map((bicycle) => (
      <div key={bicycle._id}>
        <img src={bicycle.image} alt={bicycle.name} />
        <p>{bicycle.name}</p>
      </div>
    ))
  );
}
