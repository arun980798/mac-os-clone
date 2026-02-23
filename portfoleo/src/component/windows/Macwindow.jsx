import React, { useState } from "react";
import "./Macwindow.scss";
import { Rnd } from "react-rnd";

export const Macwindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setWindowsState,
  setdockvisiblity,
}) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  let [sizecondition, setsizecondition] = useState(false);
  let [dockvisible, setdockvisible] = useState(true);

  function resizewindow() {
    setsizecondition(!sizecondition);
    console.log(sizecondition);
    if (dockvisible) {
      setdockvisiblity(false);
      setdockvisible(false);
    } else {
      setdockvisiblity(true);
      setdockvisible(true);
    }
  }
  function closewindow() {
     setWindowsState((state) => ({ ...state, [windowName]: false }))
      setdockvisiblity(true);
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
              onClick={closewindow}
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
