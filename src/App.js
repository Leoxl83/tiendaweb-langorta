import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const stock = 5;

  return (
    <>
      <NavBar/>
      <div className='main'>
        <ItemListContainer greeting={"¡Bienvenidos a nuestra tienda!"} />
        <ItemCount stock={stock}/>
      </div>
    </>
     
  );
}

export default App;
