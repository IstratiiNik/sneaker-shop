import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  Children,
} from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          "https://6863d97e88359a373e969065.mockapi.io/:cartData"
        );
        setCartItem(response.data);
      } catch (error) {
        console.error("Error when retrieving shopping cart data: ", error);
      }
    };
    fetchCartItems();
  }, []);

  const addToCart = async (product) => {
	try{
		
	}
  }
};
