import React from "react";
import { Link } from "react-router-dom";

const ButtonsCorousels = () => {
  return (
    <div>
      <h2>This is from Buttons</h2>

      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Link to="/Sweets" className="button2 btn btn-dark">
              SWEETS
            </Link>
            <Link to="/LoveBites" className="button2 btn btn-dark">
              LOVEBITES
            </Link>
            <Link to="/Snacks" className="button2 btn btn-dark">
              SNACKS
            </Link>
            <Link to="/Masala&Podi's" className="button2 btn btn-dark">
              MASALA'S&PODI'S
            </Link>
            <Link to="/Veg-Pickles" className="button2 btn btn-dark">
              VEG PICKLES
            </Link>
            <Link to="/Non-Veg-Pickles" className="button2 btn btn-dark">
              NON VEG PICKLES
            </Link>
            <Link to="/Fryums" className="button2 btn btn-dark">
              FRYUMS
            </Link>
            <Link to="/Specials" className="button2 btn btn-dark">
              SPECIALS
            </Link>
          </div>
          <div class="carousel-item"></div>
          <div class="carousel-item"></div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ButtonsCorousels;
