import Container from 'react-bootstrap/Container';
import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css"
import About from "./components/About";
import Store from "./components/Store";
import Navbar from "./components/Navbar";
import ShoppingCartProvider from './context/shoppingCartContext'
import ItemPage from './components/ItemPage';
function App() {
  return (
    <ShoppingCartProvider >
    <Navbar />
    <Container className="mb-4 h-100 relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </Container>
  </ShoppingCartProvider>
);
};


export default App;
