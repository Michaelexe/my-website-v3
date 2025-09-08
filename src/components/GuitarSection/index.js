import React from "react";
import "./styles.css";
import data from "../../assets/guitar.json";
import { Link } from "react-router-dom";

function GuitarSection() {
  const month = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="flex flexJustifyAndAlignCenter" id="guitar">
      <div className="guitar-container flexColumn">
        <h1 className="HTMLTags">{"<guitar>"}</h1>
        <div className="guitar-grid flexColumn flexAlignCenter">
          {Object.entries(data).map(([name, song]) => {
            return (
              <Link
                to={`/guitar/${name}`}
                key={name}
                className="guitar-card"
                style={{
                  backgroundImage: `url(./assets/guitarCoverImg/${song.coverImage})`,
                }}
              >
                <div className="guitar-card-info flexColumn flexJustifyCenter">
                  <h2>
                    {song.artist} - {name}
                  </h2>
                  <p>
                    {month[song.date[1] - 1]} {song.date[0]}, {song.date[2]}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <h1 className="HTMLTags" style={{ marginLeft: "auto" }}>
          {"</guitar>"}
        </h1>
      </div>
    </div>
  );
}

export default GuitarSection;
