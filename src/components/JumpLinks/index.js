import React from "react";

import "./styles.css";

function JumpLinks() {
  return (
    <div className="jumpLinksDiv">
      <ol className="flex">
        <li>
          <a href="#firstPage">Intro</a>
        </li>
        <li>
          <a href="#secondPage">Projects</a>
        </li>
        <li>
          <a href="#thirdPage">Skills</a>
        </li>
      </ol>
    </div>
  );
}

export default JumpLinks;
