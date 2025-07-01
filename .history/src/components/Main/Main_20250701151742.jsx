import React, { use, useEffect, useState } from "react";
import axios from "axios";
import News from "../News/News";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Main.module.scss";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
		try {
			const response = await axios.get("")
		}
	 };
  }, []);

  return <div>Main</div>;
};

export default Main;
