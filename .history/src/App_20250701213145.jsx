import { BrowserRouter as Router, Routes,  } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="wrapper">
      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
