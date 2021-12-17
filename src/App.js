import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes/Routes";
import { CartProvider } from "./screens/Cart/CartContext";

const App = (props) => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Router />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
