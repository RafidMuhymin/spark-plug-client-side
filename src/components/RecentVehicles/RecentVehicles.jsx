import Cars from "../Cars/Cars";
import "./RecentVehicles.css";

export default function RecentVehicles() {
  return (
    <section className="recent-vehicles bg-dark text-white p-4">
      <div className="text-center px-4 mx-auto">
        <h2>Recent Vehicles</h2>

        <p>
          Browse through our selection of excellent electric vehicles that have
          recently been added to our inventory.
        </p>
      </div>

      <Cars limit={6} />
    </section>
  );
}
