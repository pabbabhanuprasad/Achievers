import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
