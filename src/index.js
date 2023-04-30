import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FetchContextProvider } from "./Context/FetchContext";
import { CartContextProvider } from "./Context/CartContext";
import { FilterContextProvider } from "./Context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FetchContextProvider>
        <CartContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </CartContextProvider>
      </FetchContextProvider>
    </Router>
  </React.StrictMode>
);
