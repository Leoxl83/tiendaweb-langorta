import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <NavBar/>
      <div className='main'>
        <ItemListContainer greeting={"¡Bienvenidos a nuestra tienda!"} />
      </div>
    </>
     
  );
}

export default App;
