import React, { useState } from "react";
import "./Macwindow.scss";
import { Rnd } from "react-rnd";

export const Macwindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setWindowsState,
}) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  let [sizecondition, setsizecondition] = useState(false);

  function resizewindow() {
    setsizecondition(!sizecondition);
    console.log(sizecondition);
  }

  return (
    <Rnd
   {...(sizecondition
  ? {
      size: {
        width: windowSize.width,
        height: windowSize.height,
      },
      position: {
        x: 0,
        y: 0,
      },
      borderrradius: "0px",
    }
  : {
      default: {
        width: width,
        height: height,
        x: 150,
        y: 100,
      },
    })}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="roundbtn red"
              onClick={() =>
                setWindowsState((state) => ({ ...state, [windowName]: false }))
              }
            ></div>
            <div className="roundbtn yellow" onClick={resizewindow}></div>
            <div className="roundbtn green"></div>
          </div>
          <div className="title">{windowName}</div>
        </div>
        <div className="body main-content">{children}</div>
      </div>
    </Rnd>
  );
};
