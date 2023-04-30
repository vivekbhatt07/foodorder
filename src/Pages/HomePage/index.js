import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="page">
      <div className="page-wrap">
        <div className="page-head">
          <h1 className="page-title">
            Welcome to <br></br>
            <span>yummy Foods 😋</span>
          </h1>
          <Link className="home-button" to="/menu">
            Explore Cravings <div className="arrow right"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
