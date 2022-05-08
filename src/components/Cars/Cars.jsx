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
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return cars.length === 0 ? (
    loadingSpinner
  ) : (
    <div
      className="d-flex gap-3 p-4 justify-content-start align-items-center"
      style={{
        position: "relative",
        overflowX: "auto",
      }}
    >
      {cars.map(
        ({ _id, name, price, description, quantity, image, supplier }) => {
          return (
            <div className="h-100">
              <article
                key={_id}
                className="car d-flex flex-column justify-content-between"
              >
                <img src={image} alt={name} className="img-fluid" />
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="d-block">{price}</span>
                <span className="d-block">{quantity}</span>
                <span className="d-block">{supplier}</span>
              </article>
            </div>
          );
        }
      )}
    </div>
  );
}
