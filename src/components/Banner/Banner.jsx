import src from "../../images/ford.jpg";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner position-relative">
      <img
        src={src}
        className="img-fluid"
        alt="An electric car charging at an outlet"
      />

      <div className="position-absolute w-100 h-100 top-0 start-0">
        <span className="h2 position-absolute">Think Globally</span>

        <div className="position-absolute">
          <span className="h2">Act Locally, Electrically!</span>

          <span className="h3">Spark Plug</span>
        </div>
      </div>
    </section>
  );
}
