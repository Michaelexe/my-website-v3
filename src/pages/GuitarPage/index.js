import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import data from "../../assets/guitar.json";
import "./styles.css";

function GuitarPage() {
  const { name } = useParams();
  return (
    <motion.div
      className="guitar-page flexColumn flexAlignCenter"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.2 }}
    >
      <Link to="/" className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
        Back
      </Link>
      <div className="container">
        <div className="video">
          <video controls>
            <source
              src={require(`../../assets/guitar/${data[name].video}`)}
              type="video/mp4"
            />
          </video>
          <h1>
            {data[name].artist} - {name}
          </h1>
        </div>
        {data[name].tab ? null : (
          <div className="no-tab flex flexJustifyAndAlignCenter">
            <h2>Tabs are coming soon...</h2>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default GuitarPage;
