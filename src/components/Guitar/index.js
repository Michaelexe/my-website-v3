import React from "react";

import letMeDownSlowly from "./assets/let-me-down-slowly.mp4";
import glimpseOfUs from "./assets/glimpse-of-us.mp4";
import icronic from "./assets/icronic.mp4";
import jdsc from "./assets/jdsc.mp4";
import goose from "./assets/goose.mp4";

import "./styles.css";

const videos = [
  {
    file: icronic,
    text: "Polyphia - Icronic",
  },
  {
    file: letMeDownSlowly,
    text: "Let Me Down Slowly",
  },
  {
    file: goose,
    text: "Polyphia - Goose",
  },
  {
    file: glimpseOfUs,
    text: "Joji - Glimpse Of Us",
  },
  {
    file: jdsc,
    text: "Tim Henson - JDSC",
  },
];

function Guitar() {
  return (
    <div
      className="guitar-container flex flexJustifyAndAlignCenter"
      id="guitar"
    >
      <div className="guitar flexColumn">
        <h1 className="HTMLTags">{"<Guitar>"}</h1>
        <div className="grid">
          {videos.map((video) => (
            <div className="card flexColumn flexAlignCenter">
              <video src={video.file} type="video/mp4" controls />
              <span>{video.text}</span>
            </div>
          ))}
        </div>
        <h1 className="HTMLTags" style={{ marginLeft: "auto" }}>
          {"</Guitar>"}
        </h1>
      </div>
    </div>
  );
}

export default Guitar;
