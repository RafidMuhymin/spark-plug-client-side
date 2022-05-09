import { Icon } from "@iconify/react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <section className="testimonial">
      <h2 className="visually-hidden">Testimonials</h2>

      <div className="text-center d-flex flex-wrap gap-4 justify-content-evenly align-items-center">
        <div>
          <span className="d-block">
            <Icon icon="ant-design:car-outlined" />
          </span>
          <h3>Cars Sold</h3>
          <span className="d-block">2500</span>
        </div>

        <div>
          <span className="d-block">
            <Icon icon="bi:cash" />
          </span>
          <h3>Revenue Generated</h3>
          <span className="d-block">$19,750,000</span>
        </div>

        <div>
          <span className="d-block">
            <Icon icon="akar-icons:people-group" />
          </span>
          <h3>Customer Satisfaction</h3>
          <span className="d-block">99.71%</span>
        </div>
      </div>
    </section>
  );
}
