import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./Inventory.css";

export default function Inventory() {
  const { id } = useParams();

  const [carDetails, setCarDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCarDetails(data));
  }, [id]);

  const { name, price, description, quantity, image, supplier, sold } =
    carDetails;

  return Object.keys(carDetails).length === 0 ? (
    <Spinner />
  ) : (
    <main className="bg-dark inventory-page">
      <section className="mx-auto py-4">
        <img src={image} alt={name} className="img-fluid" />
        <h1 className="mb-3 text-center">{name}</h1>
        <p className="text-center">{description}</p>

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

        <button className="btn btn-primary d-block mx-auto my-2 px-5">
          Deliver Car
        </button>
      </section>
    </main>
  );
}
