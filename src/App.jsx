import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { useEffect, useState } from "react";
//import { Components } from "react";
import Home from "./pages/Home";
import Components from "./pages/components";
import Animation from "./pages/Animation";
import Calculator from "./pages/Calculator";
import AppLayout from "./layouts/Applayout";
import Todos from "./pages/Todos";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import { fecthProductsWithPrice } from "./pages/Data/Productdata";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    setProducts(fecthProductsWithPrice());
  }, []);

  return (
    <BrowserRouter basename="/csi205/">
      <Routes>
        <Route element={<AppLayout products={products} carts={carts} />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todos" element={<Todos />} />
          <Route
            path="/products"
            element={
              <Products products={products} carts={carts} setCarts={setCarts} />
            }
          />
          <Route
            path="/carts"
            element={<Carts carts={carts} setCarts={setCarts} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
