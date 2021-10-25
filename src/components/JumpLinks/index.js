import React from "react";

import "./styles.css";

function JumpLinks(props) {
  const { jumpLinks } = props;
  return (
    <div className="jumpLinksDiv fade-in" ref={jumpLinks}>
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
