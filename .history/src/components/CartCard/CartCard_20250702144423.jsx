import React from "react";
import styles from "./CartCard.module.scss";
import TrashIcon from "../../assets/trashIcon.svg";

const CartCard = ({item}) => {
	return (
		<div className={styles.card}>
			<img src={item.image} alt={image.name} />
		</div>
	);
};

export default CartCard;
