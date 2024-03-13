import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./styles.css";
import workJson from "./work.json";

function WorkPage() {
  const [currentTab, setCurrentTab] = useState("ao");
  return (
    <section id="secondPage" className="flex">
      <div className="work-container flex flexColumn">
        <h1 className="HTMLTags">{"<work>"}</h1>
        <div className="flex work-container__main">
          <Tabs
            value={currentTab}
            onChange={(e, newValue) => {
              setCurrentTab(newValue);
            }}
            orientation={window.innerWidth > 1000 ? "vertical" : "horizontal"}
            className="work-container__tabs"
            variant="scrollable"
            scrollButtons={false}
          >
            <Tab
              label="Academic Oasis"
              value="ao"
              className={`work-container__tabs__tab ${
                currentTab === "ao" ? "active" : ""
              }`}
            />
            <Tab
              label="Freelancer"
              value="free"
              className={`work-container__tabs__tab ${
                currentTab === "free" ? "active" : ""
              }`}
            />
            <Tab
              label="Locaro"
              value="locaro"
              className={`work-container__tabs__tab ${
                currentTab === "locaro" ? "active" : ""
              }`}
            />
            <Tab
              label="Qzense Labs"
              value="qzense"
              className={`work-container__tabs__tab ${
                currentTab === "qzense" ? "active" : ""
              }`}
            />
          </Tabs>
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
