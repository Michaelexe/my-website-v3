import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import NET from "vanta/dist/vanta.net.min";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes.js";

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
    let root = document.querySelector("#root");
    let blurWrapper = document.querySelector("#blur-wrapper");
    root.addEventListener("scroll", () => {
      let scrollTop = root.scrollTop;
      if (navbarRef.current) {
        if (scrollTop > 200) {
          navbarRef.current.style.backgroundColor = "rgba(1, 22, 39, 0.95)";
          blurWrapper.style.backgroundColor = "rgba(1, 22, 39, 0.6)";
          blurWrapper.style.backdropFilter = "blur(5px)";
        } else {
          navbarRef.current.style.backgroundColor = "";
          blurWrapper.style.backdropFilter = "";
          blurWrapper.style.backgroundColor = "";
        }
      }
    });

    return () => {
      let root = document.querySelector("#root");
      let blurWrapper = document.querySelector("#blur-wrapper");
      root.removeEventListener("scroll", () => {
        let scrollTop = root.scrollTop;
        if (navbarRef.current) {
          if (scrollTop > 200) {
            navbarRef.current.style.backgroundColor = "rgba(1, 22, 39, 0.95)";
            blurWrapper.style.backgroundColor = "rgba(1, 22, 39, 0.6)";
            blurWrapper.style.backdropFilter = "blur(5px)";
          } else {
            navbarRef.current.style.backgroundColor = "";
            blurWrapper.style.backdropFilter = "";
            blurWrapper.style.backgroundColor = "";
          }
        }
      });
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar navbarRef={navbarRef} />
      <div id="blur-wrapper">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
