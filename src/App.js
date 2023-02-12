import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Card from "./pages/Card"
import Checkout from "./pages/Checkout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;