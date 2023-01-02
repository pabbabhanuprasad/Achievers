import React from "react";
import { useEffect, useState } from "react";

const Sweets = () => {
  const [food, setData] = useState([]);
  const myStyle = {
    width: "100%",
    height: "150px",
  };
  const Sweets = async () => {
    let response = await (await fetch("http://localhost:3002/Sweets")).json();
    console.log(response);
    setData(response);
  };

  

  useEffect(() => {
    Sweets();
  }, []);

  return (
    <>
      {food.map((ele, i) => (
        <div key={i} style={{ width: "15%", heigth: "500px" }}>
          <img src={ele.image} style={myStyle}></img>
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
            <label style={{ color: "white" }}>{ele.name}</label>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div>
              <input type="radio"></input>
              <lable>250Gms-Rs 600</lable>
            </div>
            <div>
              <input type="radio"></input>
              <lable>500Gms-Rs 1,200</lable>
            </div>
            <div>
              <input type="radio"></input>
              <lable>1 Kg-Rs 2,000</lable>
            </div>
          </div>
          <div>MRP : 700</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "horizontal",
            }}
          >
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
      ))}
    </>
  );
};

export default Sweets;
