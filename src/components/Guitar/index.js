import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import letMeDownSlowly from "./assets/let-me-down-slowly.mp4";
import glimpseOfUs from "./assets/glimpse-of-us.mp4";
import icronic from "./assets/icronic.mp4";
import jdsc from "./assets/jdsc.mp4";
import goose from "./assets/goose.mp4";
import dangerous from "./assets/dangerous.mp4";

import "./styles.css";

const videos = [
  {
    file: dangerous,
    text: "Ariana Grande - Dangerous Woman",
  },
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
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -400px 0px",
  });
  const [play, setPlay] = useState();

  useEffect(() => {
    document.querySelectorAll("video").forEach((vid) => vid.pause());
    if (play) {
      document.getElementById(play).play();
    }
  }, [play]);

  return (
    <div
      className="guitar-container flex flexJustifyAndAlignCenter"
      id="guitar"
      ref={ref}
    >
      <div className="guitar flexColumn">
        <h1 className="HTMLTags">{"<guitar>"}</h1>
        <div className="grid">
          {videos.map((video, index) => (
            <motion.div
              className="card flexColumn flexAlignCenter"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={
                inView
                  ? {
                      opacity: play === `video-${index}` ? 1 : 0.8,
                      scale: play === `video-${index}` ? 1.03 : 1,
                      y: 0,
                    }
                  : null
              }
              transition={{
                delay: 0.2 * index,
                type: "spring",
              }}
              onClick={() => {
                if (play === `video-${index}`) {
                  setPlay();
                } else {
                  setPlay(`video-${index}`);
                }
              }}
              style={
                play === `video-${index}`
                  ? {
                      opacity: 1,
                    }
                  : null
              }
            >
              <video src={video.file} type="video/mp4" id={`video-${index}`} />
              <span>{video.text}</span>
              {play !== `video-${index}` ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </div>
        <h1 className="HTMLTags" style={{ marginLeft: "auto" }}>
          {"</guitar>"}
        </h1>
      </div>
    </div>
  );
}

export default Guitar;
