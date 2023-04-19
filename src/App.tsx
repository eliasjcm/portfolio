import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { HomeScreen } from "./HomeScreen";
// import { Typewriter } from 'react-simple-typewriter'
import Typewriter from 'typewriter-effect/dist/core';


import arrowImg from "./assets/arrow.svg";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ResumeSection } from "./ResumeSection";
import { FooterSection } from "./FooterSection";


function App() {
  const [navBgColor, setNavBgColor] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [lastPath, setLastPath] = useState("home")
  const [showAboutMe, setShowAboutMe] = useState(false)


  useEffect(() => {
    window.document.title = "Elías Castro - Portfolio"

    let _1vh = Math.round(window.innerHeight / 100)
    const handleScroll = () => {

      const COLOR_CHANGE_THRESHOLD = _1vh * 30;
      if (window.scrollY >= COLOR_CHANGE_THRESHOLD) {
        setNavBgColor(true)
      }
      if (window.scrollY < COLOR_CHANGE_THRESHOLD) {
        setNavBgColor(false)
      }

      // update current section
      // when the user starts scrolling, the current section is updated
      // to the section that is currently visible
      // window.scrollY >= homeRef.current.offsetTop

      const minCurrentViewport = window.scrollY + _1vh * 10;
      const mediumCurrentViewport = window.scrollY + _1vh * 30;
      const maxCurrentViewport = window.scrollY + _1vh * 90;

      console.log("minCurrentViewport", minCurrentViewport, "mediumCurrentViewport", mediumCurrentViewport, "maxCurrentViewport", maxCurrentViewport)
      // if lastPath changed, then update currentSection
      const currentPath = window.location.pathname.split("/")[1]

      if (lastPath !== currentSection) {
        setCurrentSection(lastPath)
        console.log("lastPath", lastPath, "currentSection", currentSection)
      }

      if (!homeRef.current || !aboutMeRef.current || !skillsRef.current || !projectsRef.current || !resumeRef.current) {
        return;
      }


      if (aboutMeRef.current.offsetTop <= maxCurrentViewport && !showAboutMe) {
        setShowAboutMe(true)
      }

      if (homeRef.current.offsetTop <= mediumCurrentViewport && minCurrentViewport <= aboutMeRef.current.offsetTop) {
        setCurrentSection("home")
        return;
      }

      if (aboutMeRef.current.offsetTop <= mediumCurrentViewport && minCurrentViewport <= skillsRef.current.offsetTop) {
        setCurrentSection("about-me")
        return;
      }

      if (skillsRef.current.offsetTop <= mediumCurrentViewport && minCurrentViewport <= projectsRef.current.offsetTop) {
        setCurrentSection("skills")
        return;
      }

      if (projectsRef.current.offsetTop <= maxCurrentViewport) {
        setCurrentSection("projects")
      }

      if (resumeRef.current.offsetTop <= maxCurrentViewport) {
        setCurrentSection("resume")
      }

    }
    window.addEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    if (showAboutMe) {

      new Typewriter('#aboutme-text', {
        strings: [`
        Hello and welcome to my portfolio! My name is <span class="focus-text">Elías Castro</span> and I'm a <span class="focus-text">computer engineering</span> student in my final year of studies. I also have a strong interest in <span class="focus-text">web development</span> and have been working my skills in this area for the last years.
        <br /><br />
        I'm excited to put my skills to the test and am actively seeking new opportunities to grow as a developer. Please don't hesitate to reach out. Thank you for stopping by!
        `],
        autoStart: true,
        delay: 20,
        deleteSpeed: 99999999999999999999999
      });
    }


  }, [showAboutMe])



  return (
    <div className="App">
      <nav className={`nav ${navBgColor ? 'color' : ''}`}>
        <ul className="nav__list">
          {/* home, about me, skills, projects, resume */}
          <li className={`nav__list__item ${currentSection === "home" ? "nav__list__item-active" : ""}`}>
            <a href="#" className="nav__list__item__link"
              onClick={(e) => {
                // setCurrentSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li className={`nav__list__item ${currentSection === "about-me" ? "nav__list__item-active" : ""}`}>
            <a href="#about-me" className="nav__list__item__link"
              onClick={(e) => {
                // setCurrentSection("about-me");
              }}
            >
              About me
            </a>
          </li>
          <li className={`nav__list__item ${currentSection === "skills" ? "nav__list__item-active" : ""}`}>
            <a href="#skills" className="nav__list__item__link"
              onClick={(e) => {
                // setCurrentSection("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className={`nav__list__item ${currentSection === "projects" ? "nav__list__item-active" : ""}`}>
            <a href="#projects" className="nav__list__item__link"
              onClick={(e) => {
                // setCurrentSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li className={`nav__list__item ${currentSection === "resume" ? "nav__list__item-active" : ""}`}>
            <a href="#resume" className="nav__list__item__link"
              onClick={(e) => {
                // setCurrentSection("resume");
              }}
            >

              Resume
            </a>
          </li>
        </ul>
      </nav>
      <HomeScreen setCurrentSection={setCurrentSection} homeRef={homeRef} />
      <div className="main-screen">
        <main className="main-content">
          <div className="content" ref={aboutMeRef}>
            <h2 id="about-me" className="content__title"><span className="content__title-init">#</span> <span className="content__title-name">About me</span></h2>
            <p className="content__text" id="aboutme-text">
            </p>
          </div>
          <SkillsSection skillsRef={skillsRef} />
          <ProjectsSection projectsRef={projectsRef} />
          <ResumeSection resumeRef={resumeRef} />
        </main>
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
