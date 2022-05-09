import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SpinnerBorder from "../SpinnerBorder/SpinnerBorder";
import SpinnerGrow from "../SpinnerGrow/SpinnerGrow";
import "./Car.css";

export default function Car() {
  const { id } = useParams();

  const [carDetails, setCarDetails] = useState({});
  const [deliveringCar, setDeliveringCar] = useState(false);
  const [restockingCar, setRestockingCar] = useState(false);
  const [deliveryError, setDeliveryError] = useState(false);
  const [restockingError, setRestockingError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HOST_URL}/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCarDetails(data));
  }, [id]);

  const { name, price, description, quantity, image, supplier, sold } =
    carDetails;

  const updateCarDetails = (newCarDetails, setError, callback) => {
    setError("");

    fetch(`${process.env.REACT_APP_API_HOST_URL}/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCarDetails),
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.modifiedCount) {
          setCarDetails(newCarDetails);
        } else {
          setError("Couldn't save changes to the database");

          setTimeout(() => {}, 3000);
        }

        callback();
      })
      .catch((err) => {
        setError(err.message);

        setTimeout(() => {
          setError("");
        }, 3000);

        callback();
      });
  };

  const handleDeliverCar = () => {
    setDeliveringCar(true);

    const newCarDetails = {
      ...carDetails,
      quantity: quantity - 1,
      sold: sold + 1,
    };

    updateCarDetails(newCarDetails, setDeliveryError, () => {
      setDeliveringCar(false);
    });
  };

  const handleRestock = (e) => {
    e.preventDefault();

    const restockQuantity = parseInt(e.target["restock-quantity"].value);

    if (restockQuantity < 1) {
      setRestockingError("Restock Quantity must be greater than 0");

      setTimeout(() => {
        setRestockingError("");
      }, 3000);

      return;
    }

    setRestockingCar(true);

    const newCarDetails = {
      ...carDetails,
      quantity: quantity + restockQuantity,
    };

    updateCarDetails(newCarDetails, setRestockingError, () => {
      setRestockingCar(false);
      e.target.reset();
    });
  };

  return Object.keys(carDetails).length === 0 ? (
    <SpinnerGrow />
  ) : (
    <main className="bg-dark car-page">
      <section className="mx-auto py-4">
        <img src={image} alt={name} className="img-fluid mx-auto d-block" />
        <h1 className="mb-3 text-center">{name}</h1>
        <p className="text-center">{description}</p>

        <div className="information d-grid gap-4">
          <table className="mx-auto">
            <tbody>
              <tr>
                <th>Price</th>
                <td>{price}</td>
              </tr>
              <tr>
                <th>Supplier</th>
                <td>{supplier}</td>
              </tr>
              <tr>
                <th>Quantity</th>
                <td>{quantity}</td>
              </tr>
              <tr>
                <th>Sold</th>
                <td>{sold}</td>
              </tr>
            </tbody>
          </table>

          <div className="d-flex flex-column align-items-center justify-content-center gap-3">
            <button onClick={handleDeliverCar} className="w-50 btn btn-primary">
              {deliveringCar ? <SpinnerBorder /> : "Deliver Car"}
            </button>

            {deliveryError && (
              <p className="text-danger mb-0">{deliveryError}</p>
            )}

            <form
              onSubmit={(e) => {
                handleRestock(e);
              }}
              className="w-50 d-flex flex-column gap-1"
            >
              <label htmlFor="restock-quantity" className="visually-hidden">
                Restock Quantity
              </label>
              <input
                type="number"
                id="restock-quantity"
                name="restock-quantity"
                className="form-control"
                placeholder="Restock Quantity"
                required
              />

              <button type="submit" className="btn btn-primary">
                {restockingCar ? <SpinnerBorder /> : "Restock Cars"}
              </button>
            </form>

            {restockingError && (
              <p className="text-danger mb-0">{restockingError}</p>
            )}

            <Link to="/manage-cars" className="w-50 btn btn-primary">
              Manage Cars
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
