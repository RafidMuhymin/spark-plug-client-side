export default function ContactForm() {
  return (
    <form>
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

      <label htmlFor="text" className="form-label">
        Leave Your Message...
      </label>
      <textarea
        rows={7.5}
        className="form-control"
        placeholder="Leave Your Message..."
        name="text"
        id="text"
        autoComplete="text"
        required
      />

      <br />

      <button className="px-5 btn btn-primary d-block mx-auto" type="submit">
        Submit
      </button>
    </form>
  );
}
