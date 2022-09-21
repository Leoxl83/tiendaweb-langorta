import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import { CartProvider } from './context/CartProvider';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element = { <ItemListContainer/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path='category/:category' element={ <ItemListContainer/>}/>
          <Route path='/cart' element={<CartWidget/>}/>
        </Routes>    
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
