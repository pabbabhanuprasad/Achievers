import './App.css';
import { NavBar } from './Components/NavBar';
import {Routes,Route,Outlet,Link,BrowserRouter} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Sweets from './Components/Sweets';
import LoveBites from './Components/LoveBItes';
import Snacks from './Components/Snacks';
import Fryums from './Components/Fryums';
import VegPickles from './Components/VegPickles';



function App() {
  return (
    
    <div className="App">
      <div className="marquee">
        <marquee>
          <h6>This is a sample scrolling text that has scrolls in the towords left
          direction.</h6>
        </marquee>
      </div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Sweets" element={<Sweets/>}/>
        <Route path="/LoveBites" element={<LoveBites/>}/>
        <Route path="/Snacks" element={<Snacks/>}/>
        <Route path="/Fryums" element={<Fryums/>}/>
        <Route path="/Veg-Pickles" element={<VegPickles/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}


export default App;
