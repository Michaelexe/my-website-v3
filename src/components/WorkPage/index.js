import React, { useState } from "react";

import "./styles.css";
import workJson from "./work.json";

function WorkPage() {
  const [currentTab, setCurrentTab] = useState("locaro");
  return (
    <section id="forthPage" className="flex">
      <div className="work-container flex flexColumn">
        <h1 className="HTMLTags">{"<work>"}</h1>
        <div className="flex work-container__main">
          <div className="work-container__tabs">
            <div
              className="work-container__tabs__indicator"
              style={{
                top: `${
                  5.9 * workJson[currentTab].order +
                  1 * workJson[currentTab].order
                }vh`,
              }}
            ></div>
            <div
              className={`work-container__tabs__tab flex flexAlignCenter ${
                currentTab === "locaro" ? "active" : ""
              }`}
              onClick={() => {
                setCurrentTab("locaro");
              }}
            >
              Locaro
            </div>
            <div
              className={`work-container__tabs__tab flex flexAlignCenter ${
                currentTab === "qzense" ? "active" : ""
              }`}
              onClick={() => {
                setCurrentTab("qzense");
              }}
            >
              Qzense Labs
            </div>
          </div>
          <div className="work-container__content">
            <h1>{workJson[currentTab].position}</h1>
            <p>
              {workJson[currentTab].start_date} -{" "}
              {workJson[currentTab].end_date}
            </p>
            <ul>
              {workJson[currentTab].description.map((point) => {
                return <li>{point}</li>;
              })}
            </ul>
          </div>
        </div>
        <h1 className="HTMLTags" style={{ marginLeft: "auto" }}>
          {"</work>"}
        </h1>
      </div>
    </section>
  );
}

export default WorkPage;
