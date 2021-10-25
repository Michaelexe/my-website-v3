import React from "react";

import "./styles.css";

function SkillsPage(props) {
  const { skillsContainer } = props;
  return (
    <section id="thirdPage" className="flex flexJustifyAndAlignCenter">
      <div id="skillsContainer" className="fade-in" ref={skillsContainer}>
        <h1 className="HTMLTags">{"<skills>"}</h1>
        <div className="skillsProgressBarParentContainer flexColumn">
          <h1>Skills</h1>
          <div className="skillsProgressBarContainer flex">
            <div className="skillsProgressBarContainerChildren">
              <div className="actualProgressBarParentDiv flexColumn">
                <h2>Python</h2>
                <div className="bar"></div>
                <div className="progress" style={{ width: "90%" }}>
                  <div className="progressPercentageDiv">90%</div>
                </div>
              </div>
              <div className="actualProgressBarParentDiv flexColumn">
                <h2>React</h2>
                <div className="bar"></div>
                <div className="progress" style={{ width: "70%" }}>
                  <div className="progressPercentageDiv">70%</div>
                </div>
              </div>
              <div className="actualProgressBarParentDiv flexColumn">
                <h2>HTML</h2>
                <div className="bar"></div>
                <div className="progress" style={{ width: "100%" }}>
                  <div className="progressPercentageDiv">100%</div>
                </div>
              </div>
            </div>
            <div className="skillsProgressBarContainerChildren">
              <div className="actualProgressBarParentDiv flexColumn">
                <h2>JavaScript</h2>
                <div className="bar"></div>
                <div className="progress" style={{ width: "80%" }}>
                  <div className="progressPercentageDiv">80%</div>
                </div>
              </div>
              <div className="actualProgressBarParentDiv flexColumn">
                <h2>CSS</h2>
                <div className="bar"></div>
                <div className="progress" style={{ width: "95%" }}>
                  <div className="progressPercentageDiv">95%</div>
                </div>
              </div>
              <div className="actualProgressBarParentDiv flexColumn">
                <h2>Guitar</h2>
                <div className="bar"></div>
                <div className="progress" style={{ width: "90%" }}>
                  <div className="progressPercentageDiv">90%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1
          className="HTMLTags"
          style={{
            position: "relative",
            left: "100%",
            width: "fit-content",
            transform: "translateX(-100%)",
          }}
        >
          {"</skills>"}
        </h1>
      </div>
    </section>
  );
}

export default SkillsPage;
