import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { Card } from "../../Component";
import { useCart } from "../../Context/CartContext";
import Cart from "../../Asset/cart.png";

function CartPage() {
  const { cartList, total } = useCart();
  const [isVoucher, setIsVoucher] = useState(false);
  return (
    <div className="cart-page">
      <div className="cart-page-wrap">
        {cartList.length > 0 ? (
          <div className="cart">
            <div className="cart-summary">
              <h2 className="cart-head">CART</h2>
              <p>
                <strong>Total Delivery Time: </strong>
                {total("delivery_time")}
              </p>
              {isVoucher && total("price") >= 5 && (
                <p className="original-amount">
                  <strong>Original Amount: </strong>${total("price")}
                </p>
              )}
              {isVoucher && total("price") >= 5 && (
                <p className="voucher-applied">
                  <strong>Amount Deducted: </strong>
                  $5
                </p>
              )}
              <p>
                <strong>Total Price: </strong>
                {isVoucher && total("price") >= 5
                  ? total("price") - 5
                  : total("price")}
              </p>
              {
                <button
                  className="coupon-button"
                  onClick={() => setIsVoucher(!isVoucher)}
                >
                  {isVoucher && total("price") >= 5
                    ? "Remove Coupon"
                    : "Apply Coupon"}
                </button>
              }
            </div>
            <ul className="cart-list">
              {cartList.map((currentCart) => {
                return <Card {...currentCart} isCart />;
              })}
            </ul>
          </div>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-card">
              <h3 className="empty-cart-card-head">Your cart is empty!</h3>
              <small>Add items to it now.</small>
              <img src={Cart} alt="cart" className="empty-cart-img" />
              <Link to="/menu" className="shop-now">
                Order now
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
