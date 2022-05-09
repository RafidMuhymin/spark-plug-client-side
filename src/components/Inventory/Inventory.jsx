import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./Inventory.css";

export default function Inventory() {
  const { id } = useParams();

  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HOST_URL}/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCarDetails(data));
  }, [id]);

  const { name, price, description, quantity, image, supplier, sold } =
    carDetails;

  const handleDeliverCar = () => {
    const newCarDetails = {
      ...carDetails,
      quantity: quantity - 1,
      sold: sold + 1,
    };

    fetch(`${process.env.REACT_APP_API_HOST_URL}/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCarDetails),
    })
      .then((res) => res.json())
      .then((data) => data.modifiedCount && setCarDetails(newCarDetails));
  };

  const handleRestock = (e) => {
    e.preventDefault();

    const restockQuantity = parseInt(e.target["restock-quantity"].value);

    const newCarDetails = {
      ...carDetails,
      quantity: quantity + restockQuantity,
    };

    fetch(`${process.env.REACT_APP_API_HOST_URL}/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCarDetails),
    })
      .then((res) => res.json())
      .then((data) => data.modifiedCount && setCarDetails(newCarDetails));
  };

  return Object.keys(carDetails).length === 0 ? (
    <Spinner />
  ) : (
    <main className="bg-dark inventory-page">
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
              Deliver Car
            </button>

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
                Restock Cars
              </button>
            </form>

            <button className="w-50 btn btn-primary">Manage Cars</button>
          </div>
        </div>
      </section>
    </main>
  );
}
