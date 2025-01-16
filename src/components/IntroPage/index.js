import React from "react";

import "./styles.css";
import myImage from "./assets/myImage4.jpg";
import resume from "../../assets/Resume.pdf";

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
            year old software developer that has been programming since he was
            13. Explore my portfolio, and let's embark on a collaborative
            adventure to turn your ideas into reality!
          </p>
          <div className="buttons">
            <a download="resume.pdf" href={resume} className="button">
              Resume
            </a>
            <a className="button" href="#contact">
              Contact Me
            </a>
          </div>
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
