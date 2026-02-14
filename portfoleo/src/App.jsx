
import "./app.scss";
import { useState } from "react";
import Dock from "./component/Dock";
import Nav from "./component/Nav";
import { Macwindow } from "./component/windows/Macwindow";
import Ghithub from "./component/windows/Ghithub";
import Note from "./component/windows/Note";
import Resume  from "./component/windows/Resume";
import Spotfy  from "./component/windows/Spotfy";
import Browser from "./component/windows/Browser";


function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  


  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      {windowsState.github && <Ghithub  windowName="github" setWindowsState={setWindowsState} />}
     {windowsState.note && <Note  windowName="note" setWindowsState={setWindowsState} />}
      {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
{windowsState.spotify && <Spotfy windowName="spotify" setWindowsState={setWindowsState} />}    
    </main>
  );
}

export default App;
