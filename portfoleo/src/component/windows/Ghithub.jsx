import React from "react";
import { Macwindow } from "./Macwindow";
import githubdata from "../../asset/github.json";
import "./github.scss";

const Ghithub = () => {
  return (
    <div>
      <Macwindow>
        grgrrgr
        <div className="cards">{githubdata.map((project) => {})}</div>
      </Macwindow>
    </div>
  );
};

export default Ghithub;
