import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useCart } from "../../Context/CartContext";

function Header() {
  const { cartList } = useCart();
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart">
            Cart <span>{cartList.length}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
