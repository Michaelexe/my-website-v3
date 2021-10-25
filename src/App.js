import React, { useEffect, useState, useRef } from "react";

import "./App.css";
import logo from "./assets/logo.png";

import IntroPage from "./components/IntroPage.js";
import JumpLinks from "./components/JumpLinks/index.js";
import ProjectsPage from "./components/ProjectsPage/index.js";
import SkillsPage from "./components/SkillsPage";
import SocialLinks from "./components/SocialLinks/index.js";

function App() {
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px",
  };

  let navbar = useRef();
  const skillsContainer = useRef();
  const socialLinks = useRef();
  const jumpLinks = useRef();
  const introPage = useRef();

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  useEffect(() => {
    const skillsContainerTarget = skillsContainer.current;
    const socialLinksTarget = socialLinks.current;
    const jumpLinksTarget = jumpLinks.current;
    const introPageTarget = introPage.current;
    appearOnScroll.observe(socialLinksTarget);
    appearOnScroll.observe(jumpLinksTarget);
    appearOnScroll.observe(introPageTarget);
    appearOnScroll.observe(skillsContainerTarget);

    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.current.style.top = "-10vh";
      } else {
        navbar.current.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });

    return () => {
      if (socialLinksTarget) appearOnScroll.unobserve(socialLinksTarget);
      if (jumpLinksTarget) appearOnScroll.unobserve(jumpLinksTarget);
      if (introPageTarget) appearOnScroll.unobserve(introPageTarget);
      if (skillsContainerTarget)
        appearOnScroll.unobserve(skillsContainerTarget);

      window.removeEventListener(
        "scroll",
        window.addEventListener("scroll", () => {
          let scrollTop = window.scrollY || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            navbar.style.top = "-10vh";
          } else {
            navbar.style.top = "0";
          }
          lastScrollTop = scrollTop;
        })
      );
    };
  }, [socialLinks, jumpLinks, introPage, skillsContainer, navbar]);

  return (
    <>
      <div id="navBar" className="flex" ref={navbar}>
        <img src={logo} alt="" />
        <SocialLinks socialLinks={socialLinks} />
        <JumpLinks jumpLinks={jumpLinks} />
      </div>
      <IntroPage introPage={introPage} />
      <ProjectsPage />
      <SkillsPage skillsContainer={skillsContainer} />
    </>
  );
}

export default App;
