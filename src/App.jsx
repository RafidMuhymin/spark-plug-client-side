import "./App.css";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:id" element={<Inventory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
