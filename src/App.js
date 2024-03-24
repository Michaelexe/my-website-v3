import React, { useEffect, useState, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import IntroPage from "./components/IntroPage";
import Navbar from "./components/Navbar";
import OtherSkills from "./components/OtherSkills";
import ProjectsPage from "./components/ProjectsPage/index.js";
import SkillsPage from "./components/SkillsPage";
import WorkPage from "./components/WorkPage";
import Guitar from "./components/Guitar";
import ContactPage from "./components/ContactPage/index.js";

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const navbarRef = useRef();

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

  useEffect(() => {
    let lastScrollTop = 0;
    let root = document.querySelector("#root");
    root.addEventListener("scroll", () => {
      let scrollTop = root.scrollTop;
      if (navbarRef.current) {
        if (scrollTop > lastScrollTop && window.innerWidth > 800) {
          navbarRef.current.style.top = "-10vh";
        } else {
          navbarRef.current.style.top = "0";
        }
        lastScrollTop = scrollTop;
        if (scrollTop > 500) {
          navbarRef.current.style.backgroundColor = "rgba(1, 22, 39, 0.95)";
        } else {
          navbarRef.current.style.backgroundColor = "";
        }
      }
    });

    return () => {
      let lastScrollTop = 0;
      let root = document.querySelector("#root");
      root.removeEventListener("scroll", () => {
        let scrollTop = root.scrollTop;
        if (navbarRef.current) {
          if (scrollTop > lastScrollTop && window.innerWidth > 800) {
            navbarRef.current.style.top = "-10vh";
          } else {
            navbarRef.current.style.top = "0";
          }
          lastScrollTop = scrollTop;
          if (scrollTop > 500) {
            navbarRef.current.style.backgroundColor = "rgba(1, 22, 39, 0.95)";
          } else {
            navbarRef.current.style.backgroundColor = "";
          }
        }
      });
    };
  }, []);

  return (
    <>
      <Navbar navbarRef={navbarRef} />
      <IntroPage />
      <WorkPage />
      <ProjectsPage />
      {/* <OtherSkills /> */}
      <Guitar />
      <ContactPage />
    </>
  );
}

export default App;
