import React from "react";
import "./Macwindow.scss";
import { Rnd } from "react-rnd";

export const Macwindow = ({ children }) => {
  return (
    <Rnd>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="roundbtn red"></div>
            <div className="roundbtn yellow"></div>
            <div className="roundbtn green"></div>
          </div>
          <div className="title">arun rajput-zsh</div>
        </div>
        <div className="body">{children}</div>
      </div>
    </Rnd>
  );
};
