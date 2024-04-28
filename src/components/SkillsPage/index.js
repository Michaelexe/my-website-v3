import React from "react";

import "./styles.css";

import pythonSVG from "./assets/python.svg";
import javascriptSVG from "./assets/javascript.svg";
import cppSVG from "./assets/cpp.svg";
import javaSVG from "./assets/java.svg";
import reactSVG from "./assets/react.svg";
import nodejsSVG from "./assets/nodejs.svg";
import flaskSVG from "./assets/flask.svg";
import reduxSVG from "./assets/redux.svg";
import postgresqlSVG from "./assets/postgresql.svg";
import dartSVG from "./assets/dart.svg";
import githubSVG from "./assets/github.svg";
import amazonSVG from "./assets/amazon.svg";
import azureSVG from "./assets/azure.svg";
import djangoSVG from "./assets/django.svg";
import htmlSVG from "./assets/html.svg";
import cssSVG from "./assets/css.svg";
import typescriptSVG from "./assets/typescript.svg";

function SkillsPage() {
  if (window.innerWidth < 500) {
    return (
      <section className="skills">
        <div className="container">
          <h1 className="HTMLTags">{"<skills>"}</h1>
          <div className="honeycomb-grid">
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={pythonSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={javascriptSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={cppSVG} alt="" />
              </div>
            </div>
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={javaSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={dartSVG} alt="" />
              </div>
            </div>
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={typescriptSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={reduxSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={flaskSVG} alt="" />
              </div>
            </div>
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={nodejsSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={postgresqlSVG} alt="" />
              </div>
            </div>
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={reactSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={amazonSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={azureSVG} alt="" />
              </div>
            </div>
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={githubSVG} alt="" />
              </div>

              <div className="hexagon">
                <img src={htmlSVG} alt="" />
              </div>
            </div>
          </div>
          <h1 className="HTMLTags" style={{ marginLeft: "auto" }}>
            {"</skills>"}
          </h1>
        </div>
      </section>
    );
  }

  if (window.innerWidth < 1000) {
    return (
      <section className="skills">
        <div className="container">
          <h1 className="HTMLTags">{"<skills>"}</h1>
          <div className="honeycomb-grid">
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={pythonSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={javascriptSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={cppSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={javaSVG} alt="" />
              </div>
            </div>
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={dartSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={typescriptSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={reduxSVG} alt="" />
              </div>
            </div>
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={flaskSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={nodejsSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={postgresqlSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={reactSVG} alt="" />
              </div>
            </div>
            <div className="honeycomb-row">
              <div className="hexagon">
                <img src={amazonSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={azureSVG} alt="" />
              </div>
              <div className="hexagon">
                <img src={githubSVG} alt="" />
              </div>
            </div>
          </div>
          <h1 className="HTMLTags" style={{ marginLeft: "auto" }}>
            {"</skills>"}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="skills">
      <div className="container">
        <h1 className="HTMLTags">{"<skills>"}</h1>
        <div className="honeycomb-grid">
          <div className="honeycomb-row">
            <div className="hexagon">
              <img src={pythonSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={javascriptSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={cppSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={javaSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={dartSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={typescriptSVG} alt="" />
            </div>
          </div>
          <div className="honeycomb-row">
            <div className="hexagon">
              <img src={reduxSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={flaskSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={nodejsSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={postgresqlSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={reactSVG} alt="" />
            </div>
          </div>
          <div className="honeycomb-row">
            <div className="hexagon">
              <img src={amazonSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={azureSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={githubSVG} alt="" />
            </div>

            <div className="hexagon">
              <img src={htmlSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={cssSVG} alt="" />
            </div>
            <div className="hexagon">
              <img src={djangoSVG} alt="" />
            </div>
          </div>
        </div>
        <h1 className="HTMLTags" style={{ marginLeft: "auto" }}>
          {"</skills>"}
        </h1>
      </div>
    </section>
  );
}

export default SkillsPage;
