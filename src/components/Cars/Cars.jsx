import { useState, useEffect } from "react";
import "./Cars.css";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cars")
      .then((response) => response.json())
      .then((cars) => setCars(cars));
  }, []);

  const loadingSpinner = (
    <div className="spinner p-5">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return cars.length === 0 ? loadingSpinner : loadingSpinner;
}
