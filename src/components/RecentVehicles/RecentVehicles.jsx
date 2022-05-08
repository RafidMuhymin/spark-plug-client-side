import Cars from "../Cars/Cars";
import "./RecentVehicles.css";

export default function RecentVehicles() {
  return (
    <section className="recent-vehicles d-flex">
      <div className="p-4 w-25 d-flex flex-column justify-content-center">
        <h2 className="text-nowrap">Recent Vehicles</h2>

        <p className="text-center ms-3">
          Browse through our selection of excellent electric vehicles that have
          recently been added to our inventory.
        </p>
      </div>

      <Cars limit={6} />
    </section>
  );
}
