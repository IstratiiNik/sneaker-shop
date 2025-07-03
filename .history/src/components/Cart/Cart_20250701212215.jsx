import React from "react";
import { useCart } from "../..context/CartContext";
import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p className={styles.cart}>Your cart is empty</p>
      ) : (
        <div className={styles.content}>
          <div className={styles.leftContent}>
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
