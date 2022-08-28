import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <NavBar />
      <header className="App-header">
        <ItemListContainer />

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
