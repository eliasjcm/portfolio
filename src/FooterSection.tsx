import React from 'react'
import SassIcon from "./assets/icons/languages/sass.svg";
import ReactIcon from "./assets/icons/technologies/react.svg";

export const FooterSection = () => {
    return (
        <footer className="footer">
            <p>Made with ❤️ By <span className='focus-text'>Elías</span></p>
            <p className='footer__created-with'>Created with <img src={ReactIcon} alt="React" /> and <img src={SassIcon} alt="Sass" /></p>
        </footer>
    )
}
