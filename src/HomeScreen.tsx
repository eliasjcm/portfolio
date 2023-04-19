import React, { useEffect } from "react";
import arrowImg from "./assets/arrow.svg";
import Typewriter from 'typewriter-effect/dist/core';
import BackgroundWave from "./assets/wave-haikei.svg"


interface HomeScreenProps {
  setCurrentSection: (section: string) => void;
  homeRef: React.RefObject<HTMLDivElement>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setCurrentSection, homeRef }) => {

  useEffect(() => {

    new Typewriter('#role', {
      strings: [`Software developer`, `Frontend developer`, `Backend developer`, `Fullstack developer`],
      autoStart: true,
      delay: 20,
      deleteSpeed: 5,
      loop: true
    });

  }, [])

  return (
    <>
      <div ref={homeRef} className="home-screen">
        <main className="main-content">
          <h2 className="main-content__hello">Hello!</h2>
          <h1 className="main-content__my-name">
            My name is{" "}
            <span className="main-content__my-name__name">Elías Castro</span>
          </h1>
          <h2 className="main-content__description">
            I'm a <span id="role" className="main-content__description__role">Frontend developer</span>

          </h2>
        </main>

        <a href="#about-me" className="down-arrow-container" onClick={() => {
          console.log("open SOURCE")
          setCurrentSection("about-me")
        }}>
          <img src={arrowImg} alt="" className="down-arrow-container__img" />
          <p className="down-arrow-container__text">About me</p>
        </a>
      </div>

    </>
  );
};
