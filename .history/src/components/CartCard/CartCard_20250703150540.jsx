import React from "react";
import styles from "./CartCard.module.scss";
import TrashIcon from "../../assets/trashIcon.svg";
import useCart

const CartCard = ({ item }) => {
	const handleDelete = ()


  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} />
      <div className={styles.info}>
        <p className={styles.name}>{item.name}</p>
        <div className={styles.price}>
          <p>PRICE:</p>
          <span>{item.price} €</span>
        </div>
      </div>
      <button className={styles.deleteBtn}>
        <img src={TrashIcon} alt="TrashIcon" />
      </button>
    </div>
  );
};

export default CartCard;
