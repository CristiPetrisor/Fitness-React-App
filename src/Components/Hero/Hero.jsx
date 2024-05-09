import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We take fitness to the next leve</h1>
        <p>
          Our training facilities have the most modern equipment, offering an
          experience difficult to compare with ordinary halls.
        </p>
        <Link to="programs" smooth={true} duration={500} offset={-100}>
          <button className="btn">
            {" "}
            Explore more <img src={dark_arrow} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
