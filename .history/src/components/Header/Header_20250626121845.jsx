import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
	<header className="{styles.header}">
		<h1>Sneaker - <Shop></Shop></h1>
	</header>
  );
};

export default Header;
