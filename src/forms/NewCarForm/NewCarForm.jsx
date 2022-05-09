import { Icon } from "@iconify/react";
import { useState } from "react";

export default function NewCarForm() {
  const addNewCar = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    formData.price = parseInt(formData.price).toLocaleString("en-US");
    formData.quantity = parseInt(formData.quantity);

    fetch(`${process.env.REACT_APP_API_HOST_URL}/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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

      <button type="submit" className="btn btn-primary d-block mx-auto">
        Add a New Car <Icon icon="akar-icons:plus" />
      </button>
    </form>
  );
}

/*

Volkswagen ID.4

Volkswagen

48,940

https://media.ed.edmunds-media.com/volkswagen/id4/2021/oem/2021_volkswagen_id4_4dr-suv_awd-pro-s-statement_fq_oem_2_500.jpg

The ID.4 is one of the first all-electric compact SUVs to hit the market, offering loads of standard features and a genuinely spacious cabin. It pushes the envelope with some neat technology and traveled 287 miles on a single charge in Edmunds' real-world range test.
*/
