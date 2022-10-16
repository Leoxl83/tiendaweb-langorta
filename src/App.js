import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartProvider';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element ={<Home/>} />
          <Route path='/item' element={<ItemListContainer />} />
          <Route path='item/:id' element={<ItemDetailContainer />} />
          <Route path='category/:category' element={<ItemListContainer />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
