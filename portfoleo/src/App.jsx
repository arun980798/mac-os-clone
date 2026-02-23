import "./app.scss";
import { useEffect, useState } from "react";
import Dock from "./component/Dock";
import Nav from "./component/Nav";
import { Macwindow } from "./component/windows/Macwindow";
import Ghithub from "./component/windows/Ghithub";
import Note from "./component/windows/Note";
import Resume from "./component/windows/Resume";
import Spotfy from "./component/windows/Spotfy";

function App() {
  let [dockvisiblity, setdockvisiblity] = useState(true);
  let [imgindx, setimgindx] = useState(0);
  let imgurl = [
    "./asset/bg1.jpg",
    "./asset/bg2.jpg",
    "./asset/bg3.jpg",
    "./asset/bg5.jpg",
  ];
  const changeImage = () => {
    setimgindx(imgindx + 1);
    if (imgindx == imgurl.length - 1) {
      setimgindx(0);
    }
    console.log(imgindx);
  };
  useEffect(() => {
    setimgindx(Math.floor(Math.random() * imgurl.length));
  }, []);

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });
  return (
    <main style={{ backgroundImage: `url(${imgurl[imgindx]})` }}>
      <Nav changeImage={changeImage} />
     {dockvisiblity && <Dock setWindowsState={setWindowsState} />}
      {windowsState.github && (
        <Ghithub windowName="github" setWindowsState={setWindowsState} setdockvisiblity={setdockvisiblity} />
      )}
      {windowsState.note && (
        <Note windowName="note" setWindowsState={setWindowsState} setdockvisiblity={setdockvisiblity} />
      )}
      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} setdockvisiblity={setdockvisiblity} />
      )}
      {windowsState.spotify && (
        <Spotfy windowName="spotify" setWindowsState={setWindowsState} setdockvisiblity={setdockvisiblity} />
      )}
    </main>
  );
}

export default App;
