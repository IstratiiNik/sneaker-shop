import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>
        <div>
          <p>PRICE: </p>
          <p className={styles.price}>{product.price} eur.</p>
        </div>
        <button onClick={handleAddToCart} className={styles.button}></button>
      </div>
    </div>
  );
};

export default ProductCard;
