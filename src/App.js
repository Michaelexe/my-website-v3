import React, { useEffect, useState, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

import "./App.css";
import logo from "./assets/logo.png";

import IntroPage from "./components/IntroPage.js";
import JumpLinks from "./components/JumpLinks/index.js";
import OtherSkills from "./components/OtherSkills";
import ProjectsPage from "./components/ProjectsPage/index.js";
import SkillsPage from "./components/SkillsPage";
import SocialLinks from "./components/SocialLinks/index.js";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: document.body,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x011627,
          zoom: 1.18,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px",
  };

  const navbar = useRef();
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
    let root = document.querySelector("#root");
    root.addEventListener("scroll", () => {
      let scrollTop = root.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.current.style.top = "-10vh";
      } else {
        navbar.current.style.top = "0";
      }
      lastScrollTop = scrollTop;

      if (scrollTop > 500) {
        navbar.current.style.backgroundColor = "rgba(1, 22, 39, 0.95)";
      } else {
        navbar.current.style.backgroundColor = "";
      }
    });

    return () => {
      if (socialLinksTarget) appearOnScroll.unobserve(socialLinksTarget);
      if (jumpLinksTarget) appearOnScroll.unobserve(jumpLinksTarget);
      if (introPageTarget) appearOnScroll.unobserve(introPageTarget);
      if (skillsContainerTarget)
        appearOnScroll.unobserve(skillsContainerTarget);

      let root = document.querySelector("#root");

      root.removeEventListener("scroll", () => {
        let scrollTop = root.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          navbar.style.top = "-10vh";
        } else {
          navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
      });
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
      <OtherSkills />
    </>
  );
}

export default App;
