import React from "react";
import { useCart } from "../..context/CartContext";
import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.scss";

const Cart = () => {
	const {cartItems} = useCart

  return <div>Cart</div>;
};

export default Cart;
