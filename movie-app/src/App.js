import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CompanyInfo from "./Components/CompanyInfo";

function App() {
  const [user, setUser] = useState(null);
  console.log("User",user);
  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/company" element={<CompanyInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
