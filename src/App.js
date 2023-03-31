import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeCart from './Component/Home-Cart/HomeCart';
import SideCart from './Component/SideCart/SideCart';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <div className='main-container row pt-5'>

    <div className='home-cart col-md-8'>
      <HomeCart></HomeCart>
     </div>

     <div className='side-cart col-md-4'>
      <SideCart></SideCart>
     </div>
    </div>
    </div>
  );
}

export default App;
