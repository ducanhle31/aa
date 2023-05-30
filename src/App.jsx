import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import NavBar from "./components/Navbar";

function App() {


  return (
    <BrowserRouter>
  
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
  
    </BrowserRouter>
  );
}

export default App;
