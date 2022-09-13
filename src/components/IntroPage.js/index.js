import React from "react";

import "./styles.css";
import myImage from "./assets/myImage.jpg";

function IntroPage(props) {
  const { introPage } = props;
  return (
    <section id="firstPage" className="fade-in" ref={introPage}>
      <div id="introContainer" className="flex">
        <div className=" introText flexColumn">
          <h1 className="HTMLTags">{"<intro>"}</h1>
          <h2>Michael Ispahani.</h2>
          <h3>Co-founder of Locaro</h3>
          <p>
            I'm a{" "}
            {Math.floor(
              (new Date() - new Date("2003-08-17")) /
                (1000 * 60 * 60 * 24 * 365.25)
            )}{" "}
            year old software engineer specialized in web development, planning
            to learning more in data science in the near future.
          </p>
          <h1 className="HTMLTags">{"</intro>"}</h1>
        </div>
        <div className="introImageDiv flex flexJustifyAndAlignCenter">
          <img src={myImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default IntroPage;
