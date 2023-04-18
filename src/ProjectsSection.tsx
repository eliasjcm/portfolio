import ChatImg1 from "./assets/projects/chat-1.png";
import MoviesImg1 from "./assets/projects/movies-1.png";
import eyeSVG from "./assets/eye.svg";
import downloadSVG from "./assets/download.svg";

interface ProjectsSectionProps {
    projectsRef: React.RefObject<HTMLDivElement>;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projectsRef }) => {
    return (
        <div ref={projectsRef} id="projects" className="content content-projects">
            <h2 className="content__title">
                <span className="content__title-init">#</span>{" "}
                <span className="content__title-name">Projects</span>
            </h2>
            <div className="content__body">
                <div className="content__body__item">
                    <div className="content__body__item__img">
                        <img src={MoviesImg1} alt="Chat app" />
                    </div>
                    <div className="content__body__item__info">
                        <h3 className="content__body__item__info__title">
                            Movies App
                        </h3>
                        <ul className="content__body__item__info__list">
                            <li className="content__body__item__info__list__item">
                                <p className="content__body__item__info__list__item__text">
                                    Movies and TV shows applications that allows users to search for movies, TV shows and actors, and view details about them.
                                </p>
                            </li>
                            <li className="content__body__item__info__list__item">
                                <p className="content__body__item__info__list__item__text">
                                    <span className="focus-text">Front-End</span> development based on React.js, React Router and SCSS.
                                </p>
                            </li>
                            <li className="content__body__item__info__list__item">
                                <p className="content__body__item__info__list__item__text">
                                    Extensive use of the <span className="focus-text-grey">The Movie Database (TMDB) API</span> to provide <span className="focus-text">authentic</span> and <span className="focus-text">up-to-date</span> information.
                                </p>
                            </li>
                        </ul>
                        <div className="content__body__item__info__links">
                            <a
                                href="https://github.com/alexandru-georgescu/chat-app"
                                target="_blank"
                                rel="noreferrer"
                                className="content__body__item__info__links__link"
                            >
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/alexandru-georgescu/chat-app"
                                target="_blank"
                                rel="noreferrer"
                                className="content__body__item__info__links__link"
                            >
                                Source Code & Info
                            </a>
                        </div>
                    </div>
                </div>
                <div className="content__body__item">
                    <div className="content__body__item__img">
                        <img src={ChatImg1} alt="Chat app" />
                    </div>
                    <div className="content__body__item__info">
                        <h3 className="content__body__item__info__title">
                            Chat App
                        </h3>
                        <ul className="content__body__item__info__list">
                            <li className="content__body__item__info__list__item">
                                <p className="content__body__item__info__list__item__text">
                                    Fully functional social network with <span className="focus-text">real-time</span> chat and video calls.
                                </p>
                            </li>
                            <li className="content__body__item__info__list__item">
                                <p className="content__body__item__info__list__item__text">
                                    Also includes authentication, profile, friends, posts, and likes.
                                </p>
                            </li>
                            <li className="content__body__item__info__list__item">
                                <p className="content__body__item__info__list__item__text">
                                    <span className="focus-text">Full-Stack</span> Project
                                </p>
                            </li>
                            <li className="content__body__item__info__list__item">
                                <p className="content__body__item__info__list__item__text">
                                    React, MUI, React Router, Node.js, Express, Socket.io, WebRTC, JWT, MySQL.
                                </p>
                            </li>
                        </ul>
                        <div className="content__body__item__info__links">
                            <a
                                href="https://github.com/alexandru-georgescu/chat-app"
                                target="_blank"
                                rel="noreferrer"
                                className="content__body__item__info__links__link"
                            >
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/alexandru-georgescu/chat-app"
                                target="_blank"
                                rel="noreferrer"
                                className="content__body__item__info__links__link"
                            >
                                Source Code & Info
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

