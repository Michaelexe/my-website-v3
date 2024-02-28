import React, { useRef } from "react";
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
  return (
    <div
      className="guitar-container flex flexJustifyAndAlignCenter"
      id="guitar"
      ref={ref}
    >
      <div className="guitar flexColumn">
        <h1 className="HTMLTags">{"<Guitar>"}</h1>
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
                      opacity: 1,
                      y: 0,
                    }
                  : null
              }
              transition={{
                delay: 0.2 * index,
                type: "spring",
              }}
            >
              <video src={video.file} type="video/mp4" controls />
              <span>{video.text}</span>
            </motion.div>
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
