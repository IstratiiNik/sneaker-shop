import { BrowserRouter as Router, Routes, Route, UNSAFE_DataRouterContext } from "react-router-dom";

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
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
