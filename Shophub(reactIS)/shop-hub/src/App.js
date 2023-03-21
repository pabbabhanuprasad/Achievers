import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import NoMatch from "./Components/NoMatch";
import Contact from "./Components/Contact"

// import { Switch, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Product from "./Components/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
