import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, MenuPage, CartPage } from "./Pages";
import { Header } from "./Component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
