import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="wrapper">
		<CartProvider
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
