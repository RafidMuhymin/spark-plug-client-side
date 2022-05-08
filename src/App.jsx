import "./App.css";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:id" element={<Inventory />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
