import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeCart from './Component/Home-Cart/HomeCart';
import SideCart from './Component/Cart/Cart';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <HomeCart></HomeCart>
    </div>
  );
}

export default App;
