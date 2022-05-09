import "./App.css";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Car from "./components/Car/Car";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageCars from "./components/ManageCars/ManageCars";
import AddNewCar from "./components/AddNewCar/AddNewCar";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/car/:id"
          element={
            <PrivateRoute>
              <Car />
            </PrivateRoute>
          }
        />
        <Route
          path="/manage-cars"
          element={
            <PrivateRoute>
              <ManageCars />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-new-car"
          element={
            <PrivateRoute>
              <AddNewCar />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
