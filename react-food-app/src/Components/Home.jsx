import React from "react";
// import {Routes,Route,Outlet,Link,BrowserRouter} from "react-router-dom";
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://www.fiahomefoods.com/uploads/banners/Slide4_1604775313.jpeg"
              className="d-block w-100"
              alt="pic1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://www.fiahomefoods.com/uploads/banners/Slide3_1604775297.jpeg"
              className="d-block w-100"
              alt="pic2"
            />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="buttons">
        <Link to="/Sweets" className="button2 btn btn-dark">SWEETS</Link>
        <Link to="/LoveBites" className="button2 btn btn-dark">LOVEBITES</Link>
        <Link to="/Snacks" className="button2 btn btn-dark">SNACKS</Link>
        <Link to="/Masala&Podi's" className="button2 btn btn-dark">MASALA'S&PODI'S</Link>
        <Link to="/Veg-Pickles" className="button2 btn btn-dark">VEG PICKLES</Link>
        <Link to="/Non-Veg-Pickles" className="button2 btn btn-dark">NON VEG PICKLES</Link>
        <Link to="/Fryums" className="button2 btn btn-dark">FRYUMS</Link>
        <Link to="/Specials" className="button2 btn btn-dark">SPECIALS</Link>
      </div>
      <div>
        <div>
          <aside>
            <h2>FROM OUR HOMES TO YOURS!</h2>
            <p>
              It all started with the passion for food and a simple idea. Within
              each individual home is a unique tradition and way of cooking,
              using age-old ingredients and recipes passed down to generations
              with love and care. We gathered a team of inspirational women to
              share and create their own recipes to bring back those nostalgic
              flavours to you.
            </p>
          </aside>
        </div>
        <div>
          <aside>
            <p>
              It all started with the passion for food and a simple idea. Within
              each individual home is a unique tradition and way of cooking,
              using age-old ingredients and recipes passed down to generations
              with love and care. We gathered a team of inspirational women to
              share and create their own recipes to bring back those nostalgic
              flavours to you.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default Home;
