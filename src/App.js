import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes/Routes";
import NavBar from "./components/NavBar/NavBar";
import { CartProvider } from "./screens/Cart/CartContext";

const App = (props) => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
