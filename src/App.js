import './App.css';
import NavBar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <NavBar/>
      <div className='main'>
        {/* <ItemListContainer greeting={"¡Bienvenidos a nuestra tienda!"} /> */}
        <ItemDetailContainer/>
      </div>
    </>
     
  );
}

export default App;
