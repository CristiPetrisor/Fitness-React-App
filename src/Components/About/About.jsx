import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-st">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-dr">
        <head>ABOUT CFIT</head>
        <h2>
          Downtown Fitness Mihai Bravu is a modern and bustling fitness center
          located in the heart of the city. With a diverse range of equipment
          and classes, it caters to both beginners and experienced fitness
          enthusiasts.
        </h2>
        <p>
          The classes offered are diverse and engaging, including yoga, pilates,
          functional training, and HIIT (high-intensity interval training).
          Instructors are dedicated and well-trained to help you achieve your
          fitness goals safely and efficiently.
        </p>
        <p>
          Whether you're looking to improve your strength, increase your
          endurance, or relax your mind and body, Downtown Fitness Mihai Bravu
          is the ideal place to do so in a friendly and stimulating environment.
        </p>
      </div>
    </div>
  );
};

export default About;
