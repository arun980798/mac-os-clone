import React from "react";
import "./Dock.scss";

const Dock = ({ windowsState, setWindowsState }) => {
  function openLinkedIn() {
    window.open(
      "https://www.linkedin.com/in/arun-rajput-592a68373/",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div>
      <footer className="dock">
        <div onClick={() => { setWindowsState(state => ({ ...state, github: true })) }} className="icon github">
          <img className="icon-img" src="/dock-icon/github.svg" alt="" />
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, note: true })) }} className="icon notes">
          <img className="icon-img" src="/dock-icon/notes.svg" alt="" />
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }} className="icon pdf">
          <img className="icon-img" src="/dock-icon/pdf.svg" alt="" />
        </div>
        <div className="icon calendar">
          <img className="icon-img" src="/dock-icon/calendar.svg" alt="" />
        </div>
        <div onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }} className="icon spotify">
          <img className="icon-img" src="/dock-icon/spotify.svg" alt="" />
        </div>
        <div className="icon mail"  onClick={()=>{window.open("mailto:arunrajput88176894@gmail.com","_blank")}}>
          <img className="icon-img" src="/dock-icon/mail.svg" alt="" />
        </div>
        <div className="icon link" onClick={openLinkedIn}>
          <img className="icon-img" src="/dock-icon/link.svg" alt="" />
        </div>
        <div className="icon cli">
          <img className="icon-img" src="/dock-icon/cli.svg" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Dock;
