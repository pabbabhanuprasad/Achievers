import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Menu1 from './Menu1';
import Menu2 from './Menu2';

const NavBar = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/menu1" element={<Menu1/>}></Route>
          <Route path="/menu2" element={<Menu2/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar