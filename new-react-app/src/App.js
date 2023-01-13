import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState({
    Price:"300rs",
  })
   const handleChange=((e)=>{
let updateValue={...data}
updateValue[e.target.name]=e.target.value;
setData(updateValue);
   })
   
  return (
    <div className="App">
     
     <input type="radio" name="Price" value="300rs" checked={data.Price=="300rs"} onChange={(e)=>{handleChange(e)}}/>300rs
     <input type="radio" name="Price" value="200rs" onChange={(e)=>{handleChange(e)}}/>200rs
     <input type="radio" name="Price" value="400rs" onChange={(e)=>{handleChange(e)}}/>400rs
<h1>{data.Price}</h1>
    </div>
  );
}

export default App;
