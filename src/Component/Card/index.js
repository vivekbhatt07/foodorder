import React from "react";
import { Image, Shimmer } from "react-shimmer";
import "./Card.css";
import { useCart } from "../../Context/CartContext";

function Card(props) {
  const {
    id,
    name,
    description,
    price,
    image,
    is_vegetarian,
    is_spicy,
    delivery_time,
    isMenu,
    isCart,
    cartCount,
  } = props;

  const { updateCartList, deleteCart } = useCart();
  return (
    <li className="card">
      <div className="card-img-wrap">
        <Image src={image} fallback={<Shimmer />} />
      </div>
      <div className="card-content">
        <p className="card-text">
          <strong>Name: </strong>
          {name}
        </p>
        <p className="card-text">
          <strong>Description: </strong>
          {description}
        </p>
        <p className="card-text">
          <strong>Price: </strong>${price}
        </p>
        <p className="card-text">
          <strong>Delivery Time: </strong>
          {delivery_time} Min
        </p>
      </div>
      {isMenu && (
        <button className="cart-button" onClick={() => updateCartList(id)}>
          Add to Cart
        </button>
      )}

      {isCart && (
        <div className="cart-actions">
          <button
            className="cart-action increment"
            onClick={() => updateCartList(id)}
          >
            +
          </button>
          <span>{cartCount}</span>
          <button
            className="cart-action decrement"
            onClick={() => deleteCart(id)}
          >
            -
          </button>
        </div>
      )}
    </li>
  );
}

export default Card;
