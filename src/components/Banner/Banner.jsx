import React from "react";
import src from "../../images/ford.jpg";

export default function Banner() {
  return (
    <section>
      <img
        src={src}
        className="img-fluid"
        alt="An electric car charging at an outlet"
      />
    </section>
  );
}
