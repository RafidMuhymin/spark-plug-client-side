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
    <div className="spinner p-5 d-flex flex-grow-1 justify-content-center align-items-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return loadingSpinner;
}
