import React, { useEffect, useState, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

import "./App.css";

import IntroPage from "./components/IntroPage";
import Navbar from "./components/Navbar";
import OtherSkills from "./components/OtherSkills";
import ProjectsPage from "./components/ProjectsPage/index.js";
import SkillsPage from "./components/SkillsPage";
import WorkPage from "./components/WorkPage";
import Guitar from "./components/Guitar";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: document.body,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1,
          color: 0x3e79cc,
          backgroundColor: 0x011627,
          points: 12.0,
          maxDistance: 18.0,
          spacing: 16.0,
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
    const navbarTarget = navbar.current;
    // const skillsContainerTarget = skillsContainer.current;
    const introPageTarget = introPage.current;
    if (introPageTarget) appearOnScroll.observe(introPageTarget);
    if (navbarTarget) appearOnScroll.observe(navbarTarget);
    // appearOnScroll.observe(skillsContainerTarget);

    var lastScrollTop = 0;
    let root = document.querySelector("#root");
    root.addEventListener("scroll", () => {
      let scrollTop = root.scrollTop;
      if (navbar.current) {
        if (scrollTop > lastScrollTop && window.innerWidth > 800) {
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
      }
    });

    return () => {
      if (introPageTarget) appearOnScroll.unobserve(introPageTarget);
      if (navbarTarget) appearOnScroll.unobserve(navbarTarget);
      // if (skillsContainerTarget)
      //   appearOnScroll.unobserve(skillsContainerTarget);

      let root = document.querySelector("#root");

      root.removeEventListener("scroll", () => {
        let scrollTop = root.scrollTop;
        if (scrollTop > lastScrollTop && window.innerWidth > 800) {
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
    };
  }, [socialLinks, jumpLinks, introPage, navbar]);

  return (
    <>
      <Navbar navbar={navbar} />
      <IntroPage introPage={introPage} />
      <WorkPage />
      <ProjectsPage />
      {/* <OtherSkills /> */}
      <Guitar />
    </>
  );
}

export default App;
