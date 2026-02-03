import React from "react";
import "./Macwindow.scss";
import { Rnd } from "react-rnd";

export const Macwindow = ({ children }) => {
  return (
    <Rnd
    default={{
       width:"40vw",
       height:"40vh",
       x:150,
       y:100
    }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="roundbtn red"></div>
            <div className="roundbtn yellow"></div>
            <div className="roundbtn green"></div>
          </div>
          <div className="title">arun rajput-zsh</div>
        </div>
        <div className="body main-content">{children}</div>
      </div>
    </Rnd>
  );
};
