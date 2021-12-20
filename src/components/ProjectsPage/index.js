import React, { useEffect, useRef } from "react";

import "./styles.css";
import locaroImage from "./assets/locaroImage.png";

function ProjectsPage() {
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
        entry.target.classList.add("appear");
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
    <section id="secondPage" className="flexColumn flexJustifyAndAlignCenter">
      <div id="projectsContainer">
        <h1 className="HTMLTags">{"<projects>"}</h1>
        <a
          href="https://github.com/Michaelexe/my-website-v3"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div
            className="projectCards flexColumn fade-in"
            ref={(element) => cards.current.push(element)}
          >
            <h1>This Website</h1>
            <p>
              This portfolio website was made using React after gaining a month
              of experience with it. It may be unnecessary to use it here... but
              i'd prefer using it anyway as it makes using javascript with your
              code a lot easier
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              className="projectSVG"
            >
              <path d="M 50.257812 1.3007812 C 50.005563 1.3436562 49.769375 1.4820312 49.609375 1.7070312 L 48.451172 3.3398438 C 48.131172 3.7908438 48.2375 4.414375 48.6875 4.734375 C 48.8635 4.859375 49.065625 4.9199219 49.265625 4.9199219 C 49.578625 4.9199219 49.886031 4.7720469 50.082031 4.4980469 L 51.240234 2.8671875 C 51.560234 2.4161875 51.455859 1.7926563 51.005859 1.4726562 C 50.779859 1.3121562 50.510062 1.2579063 50.257812 1.3007812 z M 20.576172 5.1777344 C 19.288873 5.1382179 18.073531 5.3977747 17 6.0175781 C 15.28235 7.0092636 14.179781 8.780195 13.625 10.945312 C 13.070219 13.11043 13.022816 15.708872 13.40625 18.613281 C 13.531931 19.56528 13.721046 20.56135 13.939453 21.574219 C 12.954105 21.891255 11.997781 22.223035 11.111328 22.589844 C 8.404321 23.709986 6.1777317 25.050268 4.5800781 26.613281 C 2.9824245 28.176295 2 30.01663 2 32 C 2 33.98337 2.9824245 35.823705 4.5800781 37.386719 C 6.1777317 38.949732 8.404321 40.290014 11.111328 41.410156 C 11.997781 41.776965 12.954105 42.108745 13.939453 42.425781 C 13.721047 43.43865 13.53193 44.432767 13.40625 45.384766 C 13.022818 48.289174 13.070217 50.887619 13.625 53.052734 C 14.179783 55.21785 15.282351 56.988784 17 57.980469 C 18.717649 58.972154 20.802641 59.041555 22.955078 58.439453 C 25.107513 57.837351 27.381503 56.579188 29.705078 54.794922 C 30.466405 54.210301 31.232325 53.548792 32 52.853516 C 32.767341 53.548444 33.533925 54.210554 34.294922 54.794922 C 36.618497 56.57919 38.892485 57.837349 41.044922 58.439453 C 43.197359 59.041558 45.28235 58.972155 47 57.980469 C 48.71765 56.988784 49.820219 55.217852 50.375 53.052734 C 50.929781 50.887617 50.977184 48.289175 50.59375 45.384766 C 50.468239 44.434052 50.278535 43.43916 50.060547 42.427734 C 51.046093 42.110649 52.002055 41.777032 52.888672 41.410156 C 55.595679 40.290014 57.822268 38.949732 59.419922 37.386719 C 61.017575 35.823705 62 33.98337 62 32 C 62 30.01663 61.017575 28.176295 59.419922 26.613281 C 57.822268 25.050268 55.595679 23.709986 52.888672 22.589844 C 52.002055 22.222968 51.046093 21.889351 50.060547 21.572266 C 50.278593 20.560639 50.468216 19.566126 50.59375 18.615234 C 50.977182 15.710827 50.929782 13.112382 50.375 10.947266 C 49.820217 8.782151 48.717649 7.0112162 47 6.0195312 C 45.282351 5.0278462 43.197359 4.9584458 41.044922 5.5605469 C 38.892487 6.1626493 36.618497 7.4208123 34.294922 9.2050781 C 33.533925 9.7894451 32.767341 10.451556 32 11.146484 C 31.232325 10.451208 30.466405 9.7877461 29.705078 9.203125 C 27.381503 7.4188566 25.107514 6.1606978 22.955078 5.5585938 C 22.147914 5.3328048 21.348551 5.2014442 20.576172 5.1777344 z M 53.902344 5.4101562 C 53.772984 5.420875 53.643484 5.4574844 53.521484 5.5214844 L 51.75 6.4492188 C 51.261 6.7062187 51.071125 7.3127813 51.328125 7.8007812 C 51.507125 8.1427813 51.854844 8.3359375 52.214844 8.3359375 C 52.370844 8.3359375 52.529734 8.2996562 52.677734 8.2226562 L 54.449219 7.2929688 C 54.938219 7.0359687 55.128094 6.4313594 54.871094 5.9433594 C 54.678344 5.5758594 54.290422 5.378 53.902344 5.4101562 z M 20.529297 7.171875 C 21.111026 7.1923624 21.740386 7.2973333 22.416016 7.4863281 C 24.217695 7.9903139 26.303331 9.1161957 28.484375 10.791016 C 29.161249 11.310786 29.850722 11.900408 30.541016 12.521484 C 28.562518 14.485878 26.599906 16.80011 24.71875 19.388672 C 21.536473 19.723474 18.551776 20.266877 15.861328 20.998047 C 15.668539 20.089458 15.50235 19.197848 15.390625 18.351562 C 15.030711 15.625312 15.098125 13.255652 15.5625 11.443359 C 16.026875 9.6310671 16.847892 8.41517 18 7.75 C 18.720067 7.3342687 19.559749 7.1377293 20.529297 7.171875 z M 43.46875 7.1738281 C 44.438299 7.1396823 45.279933 7.3362222 46 7.7519531 C 47.152107 8.4171226 47.973124 9.6310687 48.4375 11.443359 C 48.901876 13.25565 48.967334 15.627268 48.607422 18.353516 C 48.495711 19.199702 48.331429 20.089571 48.138672 20.998047 C 45.448224 20.266877 42.463527 19.723474 39.28125 19.388672 C 37.400262 16.800114 35.437349 14.487945 33.458984 12.523438 C 34.149258 11.902382 34.836816 11.312724 35.513672 10.792969 C 37.694716 9.1181515 39.780353 7.9903121 41.582031 7.4863281 C 42.257661 7.2973341 42.887021 7.1943156 43.46875 7.1738281 z M 55.421875 10.509766 L 53.443359 10.806641 C 52.897359 10.888641 52.521516 11.399313 52.603516 11.945312 C 52.678516 12.442313 53.104797 12.796875 53.591797 12.796875 C 53.640797 12.796875 53.689234 12.792156 53.740234 12.785156 L 55.71875 12.488281 C 56.26475 12.406281 56.642547 11.897562 56.560547 11.351562 C 56.478547 10.806563 55.969875 10.437766 55.421875 10.509766 z M 32 13.896484 C 33.548476 15.431453 35.102944 17.198827 36.619141 19.164062 C 35.109922 19.065811 33.575415 19 32 19 C 30.423909 19 28.88874 19.065728 27.378906 19.164062 C 28.895457 17.198368 30.451166 15.431702 32 13.896484 z M 53.832031 15.605469 C 53.283031 15.574469 52.806391 15.993922 52.775391 16.544922 C 52.742391 17.096922 53.164797 17.570563 53.716797 17.601562 L 55.712891 17.716797 C 55.732891 17.717797 55.751484 17.71875 55.771484 17.71875 C 56.296484 17.71875 56.736578 17.306391 56.767578 16.775391 C 56.800578 16.223391 56.380125 15.751703 55.828125 15.720703 L 53.832031 15.605469 z M 32 21 C 34.126956 21 36.193271 21.104303 38.185547 21.287109 C 39.339785 22.920819 40.4621 24.658327 41.525391 26.5 C 42.589111 28.342418 43.533132 30.182832 44.371094 32 C 43.533132 33.817168 42.589112 35.657581 41.525391 37.5 C 40.4621 39.341674 39.339785 41.07918 38.185547 42.712891 C 36.193271 42.895697 34.126956 43 32 43 C 29.873044 43 27.806729 42.895697 25.814453 42.712891 C 24.659703 41.078591 23.536392 39.342444 22.472656 37.5 C 21.408936 35.657582 20.466868 33.815215 19.628906 31.998047 C 20.466432 30.18214 21.409696 28.341101 22.472656 26.5 C 23.536393 24.657554 24.659703 22.92141 25.814453 21.287109 C 27.806729 21.104303 29.873044 21 32 21 z M 23.193359 21.580078 C 22.353311 22.838428 21.528254 24.135109 20.740234 25.5 C 19.952796 26.863883 19.243551 28.226342 18.574219 29.582031 C 17.630316 27.286243 16.877372 25.057814 16.322266 22.949219 C 18.426118 22.37557 20.732907 21.910562 23.193359 21.580078 z M 40.804688 21.580078 C 43.265867 21.910579 45.573328 22.375419 47.677734 22.949219 C 47.122628 25.057866 46.369708 27.288129 45.425781 29.583984 C 44.756015 28.227239 44.045871 26.864958 43.257812 25.5 C 42.470075 24.135599 41.644419 22.838017 40.804688 21.580078 z M 14.402344 23.525391 C 15.114448 26.220987 16.136241 29.07669 17.4375 32 C 16.136199 34.923401 15.114451 37.77894 14.402344 40.474609 C 13.519423 40.187359 12.665448 39.886821 11.876953 39.560547 C 9.3359972 38.509116 7.3158177 37.265338 5.9785156 35.957031 C 4.6412136 34.648724 4 33.330339 4 32 C 4 30.669661 4.6412136 29.351276 5.9785156 28.042969 C 7.3158177 26.734662 9.3359972 25.490884 11.876953 24.439453 C 12.665448 24.113179 13.519423 23.812641 14.402344 23.525391 z M 49.595703 23.525391 C 50.479265 23.812803 51.334031 24.112964 52.123047 24.439453 C 54.664003 25.490884 56.684182 26.734662 58.021484 28.042969 C 59.358786 29.351276 60 30.669661 60 32 C 60 33.330339 59.358786 34.648724 58.021484 35.957031 C 56.684182 37.265338 54.664003 38.509116 52.123047 39.560547 C 51.334552 39.886821 50.480577 40.187359 49.597656 40.474609 C 48.885654 37.778841 47.861826 34.923571 46.560547 32 C 47.861498 29.077167 48.883729 26.220559 49.595703 23.525391 z M 32 25 C 28.145849 25 25 28.145852 25 32 C 25 35.854148 28.145849 39 32 39 C 35.854151 39 39 35.854148 39 32 C 39 28.145852 35.854151 25 32 25 z M 32 27 C 34.773271 27 37 29.226731 37 32 C 37 34.773269 34.773271 37 32 37 C 29.226729 37 27 34.773269 27 32 C 27 29.226731 29.226729 27 32 27 z M 45.425781 34.416016 C 46.369708 36.711871 47.122627 38.942133 47.677734 41.050781 C 45.573328 41.624581 43.265867 42.089421 40.804688 42.419922 C 41.644419 41.161982 42.470075 39.864402 43.257812 38.5 C 44.045872 37.135041 44.756015 35.772761 45.425781 34.416016 z M 18.574219 34.417969 C 19.243456 35.773426 19.952933 37.136354 20.740234 38.5 C 21.528254 39.86489 22.353311 41.161572 23.193359 42.419922 C 20.732907 42.089438 18.426118 41.62443 16.322266 41.050781 C 16.877372 38.942187 17.630316 36.713757 18.574219 34.417969 z M 15.861328 43.001953 C 18.551776 43.733123 21.536473 44.276526 24.71875 44.611328 C 26.599906 47.199889 28.562518 49.514121 30.541016 51.478516 C 29.850722 52.099591 29.161249 52.687262 28.484375 53.207031 C 26.303331 54.881848 24.217694 56.009688 22.416016 56.513672 C 20.614338 57.017656 19.152107 56.91517 18 56.25 C 16.847893 55.584831 16.024924 54.368932 15.560547 52.556641 C 15.096171 50.74435 15.030713 48.372732 15.390625 45.646484 C 15.502349 44.8002 15.66854 43.910542 15.861328 43.001953 z M 48.138672 43.001953 C 48.331429 43.91043 48.49571 44.800297 48.607422 45.646484 C 48.967336 48.372734 48.901876 50.744348 48.4375 52.556641 C 47.973126 54.368933 47.152108 55.582877 46 56.248047 C 44.847892 56.913217 43.385662 57.017658 41.583984 56.513672 C 39.782305 56.009686 37.694716 54.881851 35.513672 53.207031 C 34.836797 52.687261 34.149278 52.097639 33.458984 51.476562 C 35.437349 49.512056 37.400262 47.199887 39.28125 44.611328 C 42.463527 44.276526 45.448224 43.733123 48.138672 43.001953 z M 8.6113281 43.716797 C 8.0603281 43.642797 7.5602813 44.028172 7.4882812 44.576172 C 7.4142813 45.124172 7.7996562 45.626219 8.3476562 45.699219 L 10.330078 45.962891 C 10.375078 45.968891 10.418891 45.972656 10.462891 45.972656 C 10.956891 45.972656 11.387125 45.605516 11.453125 45.103516 C 11.527125 44.555516 11.14175 44.053469 10.59375 43.980469 L 8.6113281 43.716797 z M 27.378906 44.835938 C 28.88874 44.934272 30.423909 45 32 45 C 33.575415 45 35.109922 44.934189 36.619141 44.835938 C 35.102908 46.801221 33.548512 48.568522 32 50.103516 C 30.451204 48.568335 28.895421 46.801574 27.378906 44.835938 z M 10.160156 48.818359 L 8.1621094 48.886719 C 7.6091094 48.904719 7.1763125 49.365969 7.1953125 49.917969 C 7.2133125 50.458969 7.6573594 50.884766 8.1933594 50.884766 C 8.2053594 50.884766 8.2185156 50.885766 8.2285156 50.884766 L 10.226562 50.816406 C 10.779563 50.798406 11.212359 50.337156 11.193359 49.785156 C 11.175359 49.232156 10.711156 48.781359 10.160156 48.818359 z M 11.025391 53.511719 C 10.896047 53.4985 10.763359 53.511234 10.630859 53.552734 L 8.7167969 54.136719 C 8.1887969 54.297719 7.8917344 54.856766 8.0527344 55.384766 C 8.1837344 55.815766 8.5807656 56.09375 9.0097656 56.09375 C 9.1057656 56.09375 9.2027812 56.078828 9.3007812 56.048828 L 11.214844 55.464844 C 11.742844 55.303844 12.040906 54.744797 11.878906 54.216797 C 11.758906 53.820797 11.413422 53.551375 11.025391 53.511719 z M 13.144531 57.552734 C 12.889406 57.533609 12.626969 57.610062 12.417969 57.789062 L 10.900391 59.09375 C 10.481391 59.45275 10.433969 60.084906 10.792969 60.503906 C 10.990969 60.734906 11.271734 60.851562 11.552734 60.851562 C 11.783734 60.851562 12.015125 60.771375 12.203125 60.609375 L 13.720703 59.306641 C 14.139703 58.947641 14.187125 58.315484 13.828125 57.896484 C 13.647625 57.686984 13.399656 57.571859 13.144531 57.552734 z"></path>
            </svg>
          </div>
        </a>
        <a
          href="https://locaro.in"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div
            className="projectCards flexColumn fade-in"
            ref={(element) => cards.current.push(element)}
          >
            <h1>Locaro (front end)</h1>
            <p>
              Locaro is an ecommerce website that creates a hyperlocalized
              network between small businesses and customers. Front end made in
              React.
            </p>
            <img src={locaroImage} alt="locaro" className="projectSVG" />
          </div>
        </a>
        <a
          href="https://github.com/Michaelexe/Coronavirus_live_update_app"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div
            className="projectCards flexColumn fade-in"
            ref={(element) => cards.current.push(element)}
          >
            <h1>CoronaLive</h1>
            <p>
              This was a simple executable made in Python that used an API to
              get the current number of cases and deaths per day in each country
              and just by typing the name of the country it would display all
              the info it collected
            </p>
            <img
              src="https://img.icons8.com/material/90/000000/virus.png"
              className="projectSVG"
            />
          </div>
        </a>
        <a
          href="https://github.com/Michaelexe/Snake-Game"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div
            className="projectCards flexColumn fade-in"
            ref={(element) => cards.current.push(element)}
          >
            <h1>Snake Game</h1>
            <p>
              Your classic old 2D snake game made using pygame. No clue if the
              code used is similar to anything other programmers use to make it
              as I tried my best not to look at stack overflow. This took me
              about 4 hours.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
              className="projectSVG"
            >
              <path d="M 24.5 2 C 15.800781 2 14 6.492188 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 5.792969 15 2 17.601563 2 25 C 2 32.398438 5.792969 35 9.09375 35 L 15 35 L 15 29 C 15 26.800781 16.800781 25 19 25 L 31 25 C 32.699219 25 34 23.699219 34 22 L 34 9.09375 C 34 5.59375 30.699219 2 24.5 2 Z M 20 7 C 21.101563 7 22 7.898438 22 9 C 22 10.101563 21.101563 11 20 11 C 18.898438 11 18 10.101563 18 9 C 18 7.898438 18.898438 7 20 7 Z M 35 15 L 35 22 C 35 24.199219 33.199219 26 31 26 L 19 26 C 17.300781 26 16 27.300781 16 29 L 16 40.90625 C 16 44.40625 19.300781 48 25.5 48 C 34.199219 48 36 43.507813 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 44.207031 35 48 32.398438 48 25 C 48 17.601563 44.207031 15 40.90625 15 Z M 30 39 C 31.101563 39 32 39.898438 32 41 C 32 42.101563 31.101563 43 30 43 C 28.898438 43 28 42.101563 28 41 C 28 39.898438 28.898438 39 30 39 Z"></path>
            </svg>
          </div>
        </a>
        <a
          href="https://github.com/Michaelexe/Tik-Tak-Toe"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div
            className="projectCards flexColumn fade-in"
            ref={(element) => cards.current.push(element)}
          >
            <h1>Tik Tak Toe</h1>
            <p>
              A simple tik tak toe game (without GUI) made using a lot of print
              and if-else statements. You also have an option to play against an
              unintelligent bot or against a friend. This too was made using
              Python.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
              className="projectSVG"
            >
              <path d="M 24.5 2 C 15.800781 2 14 6.492188 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 5.792969 15 2 17.601563 2 25 C 2 32.398438 5.792969 35 9.09375 35 L 15 35 L 15 29 C 15 26.800781 16.800781 25 19 25 L 31 25 C 32.699219 25 34 23.699219 34 22 L 34 9.09375 C 34 5.59375 30.699219 2 24.5 2 Z M 20 7 C 21.101563 7 22 7.898438 22 9 C 22 10.101563 21.101563 11 20 11 C 18.898438 11 18 10.101563 18 9 C 18 7.898438 18.898438 7 20 7 Z M 35 15 L 35 22 C 35 24.199219 33.199219 26 31 26 L 19 26 C 17.300781 26 16 27.300781 16 29 L 16 40.90625 C 16 44.40625 19.300781 48 25.5 48 C 34.199219 48 36 43.507813 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 44.207031 35 48 32.398438 48 25 C 48 17.601563 44.207031 15 40.90625 15 Z M 30 39 C 31.101563 39 32 39.898438 32 41 C 32 42.101563 31.101563 43 30 43 C 28.898438 43 28 42.101563 28 41 C 28 39.898438 28.898438 39 30 39 Z"></path>
            </svg>
          </div>
        </a>
        <a
          href="https://github.com/Michaelexe/Password-Improver"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div
            className="projectCards flexColumn fade-in"
            ref={(element) => cards.current.push(element)}
          >
            <h1>Password Improver</h1>
            <p>
              Yet another app made with tkinter for the GUI and a lot of if-else
              statements. Pretty much this takes in your password and changes it
              into something longer and unpredictable. It also saves them into a
              password.txt file in the same folder as the app. Again, this was
              made with Python.
            </p>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/password.png"
              className="projectSVG"
            />
          </div>
        </a>
        <a
          href="https://github.com/Michaelexe/Automatic-File-Mover"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div
            className="projectCards flexColumn fade-in"
            ref={(element) => cards.current.push(element)}
          >
            <h1>Automatic File Mover</h1>
            <p>
              Basically a script that was made using Python's OS module that
              moves files to different folders depending on the file extension
              (.mp3 to the music folder, etc.) after a file is added to the
              downloads folder.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              className="projectSVG"
            >
              {" "}
              <path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 8 L 13 8 L 28 8 L 28 7 C 28 5.895 27.105 5 26 5 L 11.199219 5 L 10.582031 3.9707031 C 10.221031 3.3687031 9.5701875 3 8.8671875 3 L 4 3 z M 3 10 C 2.448 10 2 10.448 2 11 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 11 C 28 10.448 27.552 10 27 10 L 3 10 z"></path>
            </svg>
          </div>
        </a>
        <h1 className="HTMLTags">{"</projects>"}</h1>
      </div>
    </section>
  );
}

export default ProjectsPage;
