import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes/Routes";
import { CartProvider } from "./screens/Cart/CartContext";

const App = (props) => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
