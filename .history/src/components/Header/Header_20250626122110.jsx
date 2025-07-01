import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Sneaker - Shop</h1>
      <nav className={styles.nav}>
			<NavLink to="/" style={({isActive}) => ({})}></NavLink>
		</nav>
    </header>
  );
};

export default Header;
