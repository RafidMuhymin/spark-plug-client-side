import Banner from "../Banner/Banner";
import RegisterMessage from "../RegisterMessage/RegisterMessage";
import RecentVehicles from "../RecentVehicles/RecentVehicles";
import Testimonial from "../Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Banner />
      <RecentVehicles />
      <Testimonial />
      <RegisterMessage />
    </main>
  );
}
