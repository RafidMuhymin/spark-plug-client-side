import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cars.css";

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cars")
      .then((response) => response.json())
      .then((cars) => setCars(cars));
  }, []);

  const navigate = useNavigate();

  const handleClick = (_id) => {
    navigate(`/cars/${_id}`);
  };

  const loadingSpinner = (
    <div className="spinner p-5 d-flex flex-grow-1 justify-content-center align-items-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return cars.length === 0 ? (
    loadingSpinner
  ) : (
    <div className="cars-container d-flex align-items-stretch overflow-auto">
      {cars.map(
        ({ _id, name, price, description, quantity, image, supplier }) => {
          return (
            <div key={_id} className="p-3">
              <article className="car text-center h-100 p-3 rounded-3 d-flex flex-column justify-content-between">
                <img src={image} alt={name} className="img-fluid" />
                <h3>{name}</h3>
                <p className="text-secondary">{description}</p>
                <span className="d-block">
                  <span className="text-info">Price:</span> ${price}
                </span>
                <span className="d-block">
                  <span className="text-info">Quantity:</span> {quantity}
                </span>
                <span className="d-block">
                  <span className="text-info">Supplier:</span> {supplier}
                </span>
                <button
                  onClick={() => {
                    handleClick(_id);
                  }}
                  className="btn btn-primary d-block mx-auto my-2 px-5"
                >
                  Manage Stock
                </button>
              </article>
            </div>
          );
        }
      )}
    </div>
  );
}
