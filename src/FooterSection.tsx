import React from 'react'
import SassIcon from "./assets/icons/languages/sass.svg";
import ReactIcon from "./assets/icons/technologies/react.svg";

import GitHubIcon from "./assets/icons/tools/github.svg";
import LinkedInIcon from "./assets/icons/tools/linkedin.svg";

export const FooterSection = () => {
    return (
        <footer className="footer">
            <p>Made with ❤️ By <span className='focus-text'>Elías</span></p>
            <p className='footer__created-with'>Created with <img src={ReactIcon} alt="React" /> and <img src={SassIcon} alt="Sass" /></p>
            <div className="footer__social">
                <a href="https://github.com/eliasjcm" target="_blank" rel="noreferrer">
                    <img src={GitHubIcon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/eliascastrom/" target="_blank" rel="noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" />
                </a>
            </div>
        </footer>
    )
}
