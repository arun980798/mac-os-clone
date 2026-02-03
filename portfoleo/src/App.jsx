import { useState } from 'react'
import "./app.scss"
import Dock from './component/Dock'
import Nav from './component/Nav'
import { Macwindow } from './component/windows/Macwindow'
import Ghithub from './component/windows/Ghithub'


function App() {


  return (
 
    <main>
      <Nav/>
      <Dock/>
      <Ghithub/>

    </main>
  )
}

export default App
