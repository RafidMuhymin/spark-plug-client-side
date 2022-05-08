export default function CheckoutForm({ setThank }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setThank(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="form-label">
        Enter Your Full Name
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

      <label htmlFor="email" className="form-label">
        Enter Your Email Address
      </label>
      <input
        className="form-control"
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        required
      />

      <br />

      <label htmlFor="address" className="form-label">
        Enter Your Street Address
      </label>
      <input
        className="form-control"
        type="text"
        name="address"
        id="address"
        autoComplete="street-address"
        required
      />

      <br />

      <label htmlFor="tel" className="form-label">
        Enter Your Phone Number
      </label>
      <input
        className="form-control"
        type="tel"
        name="tel"
        id="tel"
        autoComplete="tel"
        required
      />

      <br />

      <button className="px-5 btn btn-primary d-block mx-auto" type="submit">
        Submit
      </button>
    </form>
  );
}
