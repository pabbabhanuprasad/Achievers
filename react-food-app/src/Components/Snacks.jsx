import React from "react";
import { useEffect, useState } from "react";
import "../Style.css/Items.css";
const Snacks = () => {
  const [food, setData] = useState([]);
  const myStyle = {
    width: "100%",
    height: "200px",
  };
  const Snacks = async () => {
    let response = await (
      await fetch("http://localhost:3002/Snacks")
    ).json();
    console.log(response);
    setData(response);
  };
  useEffect(() => {
    Snacks();
  }, []);
  const [data,set1Data]=useState({
    price:"600rs",
  })
  const handleChange=((e)=>{
    let updateValue={...data}
    updateValue[e.target.name]=e.target.value;
    set1Data(updateValue);
       })
  return (
    <div className="grid-container">
      {food.map((ele, i) => (
        <div key={i} className="card">
          <div className="grid-item grid-item1">
            <img src={ele.image} style={myStyle}></img>
          </div>
          <div className="grid-item grid-item2">
            <p className="para">
            <label style={{ color: "white" }}>{ele.name}</label>
            </p>
            <div className="secondPart">
              <div>
                <input type="radio" name="price" checked={data.price == "200rs"}
                    value={"200rs"}
                    onChange={(e) => {
                      handleChange(e);
                    }}/>
                <lable>{ele.price[0]}</lable>
              </div>
              <div>
                <input type="radio" name="price" value={"300rs"}
                    onChange={(e) => {
                      handleChange(e);
                    }}/>
                <lable>{ele.price[1]}</lable>
              </div>
              <div>
                <input type="radio" name="price" value={"300rs"}
                    onChange={(e) => {
                      handleChange(e);
                    }}/>
                <lable>{ele.price[2]}</lable>
              </div>
              <div>MRP :</div>
              <div className="quantity">
                <p>QTY</p>
                <button className="minus">-</button>
                <p>1</p>
                <button className="plus">+</button>
                <button className="add">ADD</button>
              </div>
              <div>
                <button className="viewMore">View more</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Snacks;
