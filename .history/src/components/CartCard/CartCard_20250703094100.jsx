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
.deleteBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border: none;
  background: url('../../assets/circle-bg.svg') center/cover no-repeat;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  align-self: center;

  img {
    width: 30px;
    height: 30px;
    display: block;
    z-index: 1;
  }
}
