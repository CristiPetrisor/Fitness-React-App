import React, { useRef } from "react";
import "./Trainers.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.jpeg";
import user_2 from "../../assets/user-2.jpeg";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";

const Trainers = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="trainers">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="user-image">
                  <img src={user_1} alt="" />
                </div>
                <div>
                  <h3>Alex Marian</h3>
                  <span>Bucharest, Romania</span>
                </div>
              </div>
              <p>
                As a fitness coach, you are a dedicated and motivated guide,
                passionate about health and well-being. With a deep knowledge of
                anatomy and effective exercises, you help others reach their
                fitness goals by tailoring programs to individual needs and
                capabilities. With excellent communication skills and empathy,
                you encourage clients to push past their limits and improve both
                their physical and mental health.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="user-image">
                  <img src={user_2} alt="" />
                </div>
                <div>
                  <h3>Alin Petre</h3>
                  <span>Bucharest, Romania</span>
                </div>
              </div>
              <p>
                As a fitness coach, you are a dedicated and motivated guide,
                passionate about health and well-being. With a deep knowledge of
                anatomy and effective exercises, you help others reach their
                fitness goals by tailoring programs to individual needs and
                capabilities. With excellent communication skills and empathy,
                you encourage clients to push past their limits and improve both
                their physical and mental health.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="user-image">
                  <img src={user_3} alt="" />
                </div>
                <div>
                  <h3>Maria Elena</h3>
                  <span>Bucharest, Romania</span>
                </div>
              </div>
              <p>
                As a fitness coach, you are a dedicated and motivated guide,
                passionate about health and well-being. With a deep knowledge of
                anatomy and effective exercises, you help others reach their
                fitness goals by tailoring programs to individual needs and
                capabilities. With excellent communication skills and empathy,
                you encourage clients to push past their limits and improve both
                their physical and mental health.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="user-image">
                  <img src={user_4} alt="" />
                </div>
                <div>
                  <h3>Miruna Naidin</h3>
                  <span>Bucharest, Romania</span>
                </div>
              </div>
              <p>
                As a fitness coach, you are a dedicated and motivated guide,
                passionate about health and well-being. With a deep knowledge of
                anatomy and effective exercises, you help others reach their
                fitness goals by tailoring programs to individual needs and
                capabilities. With excellent communication skills and empathy,
                you encourage clients to push past their limits and improve both
                their physical and mental health.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Trainers;
