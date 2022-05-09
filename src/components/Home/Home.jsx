import Banner from "../Banner/Banner";
import RegisterMessage from "../RegisterMessage/RegisterMessage";
import RecentVehicles from "../RecentVehicles/RecentVehicles";

export default function Home() {
  return (
    <main>
      <Banner />
      <RecentVehicles />
      <RegisterMessage />
    </main>
  );
}
