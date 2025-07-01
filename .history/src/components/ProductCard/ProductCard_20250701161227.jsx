import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.scss";

const ProductCard = ({product}) => {
	const {addToCart} = useCart()

  const handleAddToCart = () => {}
};

export default ProductCard;
