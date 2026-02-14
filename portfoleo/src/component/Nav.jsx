import React from 'react'
import "./Nav.scss"
import Datetime from './Datetime'

const Nav = ({changeImage}) => {
  return (
   <nav>
    <div className="left nav-side">
      <div className="nav-icon">
        <img src="/dock-icon/apple.svg" alt="" />
      </div>

      <div className="nav-item"><p>Arun rajput </p></div>
      <div className="nev-itam"><p>File</p></div>
      <div className="nev-itam"><p>Window</p></div>
      <div className="nev-itam"><p>terminal</p></div>
    </div>
    <div className="right nav-side">
      <button onClick={changeImage} >changeImage</button>
      <div className="nav-icon">
        <img src="/dock-icon/wifi.svg" alt="" />
      </div>
      <div className="date-time">
        <Datetime />
      </div>
    </div>

   </nav>
  )
}

export default Nav
