import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Sneaker - Shop</h1>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "FFFFFF80",
          })}
        >Home</NavLink>
      </nav>
      <nav className={styles.nav}>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "FFFFFF80",
          })}
        >Cart</NavLink>
      </nav>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFFFFF" : "FFFFFF80",
          })}
        >Contacts</NavLink>
      </nav>
    </header>
  );
};

export default Header;
