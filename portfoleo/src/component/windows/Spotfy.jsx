import React from "react";
import { Macwindow } from "./Macwindow";
import "./spotify.scss"


function Spotfy(  { windowName, setWindowsState }) {
  return (
    <>
      <Macwindow height="30vh" width="30vw" windowName={windowName} setWindowsState={setWindowsState}>
        <div className="spotify-window">
          <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8IWBJcgQt4I?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        </div>
      </Macwindow>
    </>
  );
}

export default Spotfy;


