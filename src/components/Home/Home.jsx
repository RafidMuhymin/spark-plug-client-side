import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RecentVehicles from "../RecentVehicles/RecentVehicles";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <RecentVehicles />
      <Footer />
    </main>
  );
}
