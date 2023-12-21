import React from "react";

import "./styles.css";
import myImage from "./assets/myImage3.jpg";

function IntroPage() {
  return (
    <section id="firstPage">
      <div id="introContainer" className="flex">
        <div className=" introText flexColumn">
          <h1 className="HTMLTags">{"<intro>"}</h1>
          <h2>Michael Ispahani.</h2>
          <h3>Co-founder of Locaro</h3>
          <p>
            A{" "}
            {Math.floor(
              (new Date() - new Date("2003-08-17")) /
                (1000 * 60 * 60 * 24 * 365.25)
            )}{" "}
            year old software engineer that has been programming since he was
            13. Currently studying Computer Science at Ontario Tech University,
            specializing in data science.
          </p>
          <h1 className="HTMLTags">{"</intro>"}</h1>
        </div>
        <div className="introImageDiv flex flexJustifyAndAlignCenter">
          <img src={myImage} alt="" loading="eager" />
        </div>
      </div>
    </section>
  );
}

export default IntroPage;
