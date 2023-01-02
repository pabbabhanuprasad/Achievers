import React from "react";
import { useEffect,useState } from 'react';

const LoveBItes = () => {
  const [food,setData]=useState([]); 
  const myStyle = {
    width: "100%",
    height: "150px",
  };
  const LoveBites=async()=>{
    let response=await (await fetch("http://localhost:3002/LoveBites")).json();
    console.log(response);
    setData(response);
  }
  useEffect(()=>{LoveBites()
  },[])
  return (
    <>
    {food.map((ele,i)=>(
    <div style={{ width: "15%", heigth: "500px" }}>
      <img
        src="https://www.fiahomefoods.com/uploads/products/mixed-asorted-love-bites_1662034145.jpg"
        style={myStyle}
      ></img>
      <p
        style={{
          width: "100%",
          backgroundColor: "orange",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label style={{ color: "white" }}>Data</label>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"column"
        }}
      >
        <div >
          <input type="radio"></input>
          <lable>250gm</lable>
        </div>
        <div >
          <input type="radio"></input>
          <lable>250gm</lable>
        </div>
        <div >
          <input type="radio"></input>
          <lable>250gm</lable>
        </div>
      </div>
      <div>MRP : 700</div>
      <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"horizontal"
        }}>
        <p>QTY</p>
        <button>-</button>
        <p>1</p>
        <button>+</button>
        <button>ADD</button>
      </div>
      <div>
        <button>View more</button>
      </div>
    </div>
  ))}</>
  )
};

export default LoveBItes;
