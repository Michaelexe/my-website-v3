import React, { useRef, useEffect } from "react";

import "./styles.css";
import chessJPG from "./assets/chess.jpg";
import guitarVideo from "./assets/gooseGuitar.mp4";

function OtherSkills() {
  const cards = useRef(new Array());

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -20% 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("active");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  useEffect(() => {
    cards.current.forEach((card) => {
      appearOnScroll.observe(card);
    });
    console.log(cards);
  }, []);

  return (
    <section id="forthPage" className="flexColumn flexAlignCenter">
      <div className="otherSkillsContainer flexColumn">
        <h1 className="HTMLTags">{"<other skills>"}</h1>
        <div
          className="otherSkillsDiv flex"
          ref={(element) => cards.current.push(element)}
          style={{ left: "20%", marginBottom: "20px" }}
        >
          <div className="otherSkillsTextDiv flexColumn">
            <h1>
              {Math.floor(
                (new Date() - new Date("2010-06-01")) /
                  (1000 * 60 * 60 * 24 * 365.25)
              )}{" "}
              Years Of Guitar
            </h1>
            <p>
              I've been playing guitar ever since I was 7. I started off with a
              classical guitar and then after 6 years started playing the
              electric as well. As I didn't find the teachers being able to make
              the most of my abilities I decided to be self taught. While doing
              so, I managed to learn how to play percussive fingerstyle and a
              lot of math rock styled guitar.
            </p>
          </div>
          <video className="otherSkills__video" controls>
            <source src={guitarVideo} type="video/mp4" />
          </video>
        </div>
        <div
          className="otherSkillsDiv flex"
          ref={(element) => cards.current.push(element)}
          style={{ left: "80%" }}
        >
          <img src={chessJPG} alt="" />
          <div className="otherSkillsTextDiv flexColumn">
            <h1>School Chess Champion</h1>
            <p>
              {/* As mentioned above, I've won multiple chess tournaments in my
              school whenever held. Don't ask me how I learn't to play it that
              well, I just somehow was good at it. */}
              At some random point in my life, I started playing chess whenever
              I got free time, which led to me getting better at recognising and
              taking advantage of other's mistakes. Eventually I ended up
              becoming chess champion at my school.
            </p>
          </div>
        </div>
        <h1
          className="HTMLTags"
          style={{
            marginLeft: "auto",
          }}
        >
          {"</other skills>"}
        </h1>
      </div>
    </section>
  );
}

export default OtherSkills;
