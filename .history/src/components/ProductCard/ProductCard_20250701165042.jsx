import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return(
	<div className={styles.card}>
		<img src={product.image} alt={product.name} />
	</div>
  )
};

export default ProductCard;
