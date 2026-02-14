import React from 'react'
import { Macwindow } from "./Macwindow";
import "./resume.scss";


const Resume = ({ windowName, setWindowsState }) => {
  return (
    <div>
      <Macwindow windowName={windowName} setWindowsState={setWindowsState} >
       <div className="resume-window">
                <embed src="/resume.pdf" frameborder="0"></embed>
            </div>
      </Macwindow>
    </div>
  )
}

export default Resume
