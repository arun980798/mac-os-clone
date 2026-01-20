import React from 'react'
import "./Dock.scss"

const Dock = () => {
  return (
    <div>
      <footer className='dock'>
        
         <div className='icon github'><img  className='icon-img'  src="/dock-icon/github.svg" alt="" /></div>
         <div className='icon notes'><img  className='icon-img' src="/dock-icon/notes.svg" alt="" /></div>
         <div className='icon pdf'><img  className='icon-img' src="/dock-icon/pdf.svg" alt="" /></div>
         <div className='icon calendar'><img  className='icon-img' src="/dock-icon/calendar.svg" alt="" /></div>
         <div className='icon spotify'><img  className='icon-img' src="/dock-icon/spotify.svg" alt="" /></div>
         <div className='icon mail'><img  className='icon-img' src="/dock-icon/mail.svg" alt="" /></div>
         <div className='icon link'><img  className='icon-img' src="/dock-icon/link.svg" alt="" /></div>
         <div className='icon cli'><img  className='icon-img' src="/dock-icon/cli.svg" alt="" /></div>


         
         
      </footer>
    </div>
  )
}

export default Dock
