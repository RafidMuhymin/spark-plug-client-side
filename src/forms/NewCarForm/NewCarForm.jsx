import { Icon } from "@iconify/react";
import { useState } from "react";
import SpinnerBorder from "../../components/SpinnerBorder/SpinnerBorder";
import auth from "../../firebase/firebase";

export default function NewCarForm() {
  const [addingCar, setAddingCar] = useState(false);
  const [addingCarError, setAddingCarError] = useState("");

  const addNewCar = (e) => {
    e.preventDefault();

    setAddingCar(true);

    const formData = Object.fromEntries(new FormData(e.target));

    formData.price = parseInt(formData.price).toLocaleString("en-US");
    formData.quantity = parseInt(formData.quantity);

    formData.userId = auth.currentUser.uid;

    fetch(`${process.env.REACT_APP_API_HOST_URL}/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
        } else {
          setAddingCarError("Couldn't save changes to the Database");

          setTimeout(() => {
            setAddingCarError("");
          }, 3000);
        }

        setAddingCar(false);
      })
      .catch((error) => {
        setAddingCarError(error.message);

        setTimeout(() => {
          setAddingCarError("");
        }, 3000);

        setAddingCar(false);
      });
  };

  return (
    <form
      onSubmit={(e) => {
        addNewCar(e);
      }}
    >
      <label htmlFor="name" className="form-label">
        Enter The Name of The Car
      </label>
      <input
        className="form-control"
        type="text"
        name="name"
        id="name"
        autoComplete="name"
        required
      />

      <br />

      <label htmlFor="price" className="form-label">
        Enter The Price of The Car
      </label>
      <input
        className="form-control"
        type="number"
        placeholder="4000"
        min={4000}
        name="price"
        id="price"
        autoComplete="on"
        required
      />

      <br />

      <label htmlFor="imageUrl" className="form-label">
        Provide a URL to an Image showing The Car
      </label>
      <input
        className="form-control"
        type="url"
        name="imageUrl"
        id="imageUrl"
        autoComplete="photo"
        required
      />

      <br />

      <label htmlFor="quantity" className="form-label">
        Enter How Many Cars You Have In Stock
      </label>
      <input
        className="form-control"
        type="number"
        placeholder="5"
        min={5}
        name="quantity"
        id="quantity"
        autoComplete="on"
        required
      />

      <br />

      <label htmlFor="supplier" className="form-label">
        Enter The Name of The Supplier Company
      </label>
      <input
        className="form-control"
        type="text"
        name="supplier"
        id="supplier"
        autoComplete="on"
        required
      />

      <br />

      <label htmlFor="description" className="form-label">
        Provide a Few Lines of Details About The Car
      </label>
      <textarea
        rows={7.5}
        className="form-control"
        placeholder="Provide A Few Lines of Details About The Car..."
        name="description"
        id="description"
        autoComplete="text"
        required
      />

      <br />

      <button
        type="submit"
        className="px-5 py-2 btn btn-primary d-block mx-auto"
      >
        {addingCar ? (
          <SpinnerBorder />
        ) : (
          <span className="d-inline-flex gap-2 justify-content-center align-items-center">
            Add a New Car <Icon icon="akar-icons:plus" />
          </span>
        )}
      </button>

      {addingCarError && (
        <p className="mt-3 text-center text-danger">{addingCarError}</p>
      )}
    </form>
  );
}
