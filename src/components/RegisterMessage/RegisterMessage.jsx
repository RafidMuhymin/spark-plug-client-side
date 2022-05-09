import React from "react";
import { Link } from "react-router-dom";

export default function RegisterMessage() {
  return (
    <section className="p-5">
      <h2 className="text-center">Don't have an Account?</h2>

      <span className="d-block h3 text-center">
        <Link to={"register"} className="btn btn-primary px-5 py-2">
          Register
        </Link>
      </span>
    </section>
  );
}
