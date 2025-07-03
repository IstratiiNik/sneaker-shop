import React from "react";
import styles from "./CartCard.module.scss";
import TrashIcon from "../../assets/trashIcon.svg";

const CartCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} />
      <div className={styles.info}>
        <p className={styles.name}>{item.name}</p>
        <div className={styles.price}>
          <span>PRICE:</span>
          <span>{item.price}</span>
        </div>
      </div>
      <button className={styles.deleteBtn}><img src=TrashIcon{} alt="" /></button>
    </div>
  );
};

export default CartCard;
