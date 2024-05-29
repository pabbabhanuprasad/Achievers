
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({user}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {user ? user.name.charAt(0) : "Home"}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/company"
              >
                Company Info
              </Link>
            </li>
            {user && <li><a href="/dashboard">Dashboard</a></li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
