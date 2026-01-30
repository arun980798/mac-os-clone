import { useState } from 'react'
import "./app.scss"
import Dock from './component/Dock'
import Nav from './component/Nav'
import { Macwindow } from './component/windows/Macwindow'


function App() {


  return (
 
    <main>
      <Nav/>
      <Macwindow>
      </Macwindow>
      <Dock/>

    </main>
  )
}

export default App
