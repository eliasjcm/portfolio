import JavaScriptIcon from "./assets/icons/languages/javascript.svg";
import PythonIcon from "./assets/icons/languages/python.svg";
import TypeScriptIcon from "./assets/icons/languages/typescript.svg";
import CIcon from "./assets/icons/languages/c.svg";
import CppIcon from "./assets/icons/languages/cpp.svg";
import JavaIcon from "./assets/icons/languages/java.svg";
import HtmlIcon from "./assets/icons/languages/html.svg";
import CssIcon from "./assets/icons/languages/css.svg";
import SassIcon from "./assets/icons/languages/sass.svg";

import FirebaseIcon from "./assets/icons/databases/firebase.svg";
import MongoDBIcon from "./assets/icons/databases/mongodb.svg";
import MySQLIcon from "./assets/icons/databases/mysql.svg";
import OracleIcon from "./assets/icons/databases/oracle.svg";

import NodeJSIcon from "./assets/icons/technologies/nodejs.svg";
import ReactIcon from "./assets/icons/technologies/react.svg";
import ReduxIcon from "./assets/icons/technologies/redux.svg";
import ExpressIcon from "./assets/icons/technologies/express.svg";
import MaterialUiIcon from "./assets/icons/technologies/materialui.svg";
import SeleniumIcon from "./assets/icons/technologies/selenium.svg";
import SocketIoIcon from "./assets/icons/technologies/socketio.svg";

import GitIcon from "./assets/icons/tools/git.svg";
import GithubIcon from "./assets/icons/tools/github.svg";
import HerokuIcon from "./assets/icons/tools/heroku.svg";
import AWSIcon from "./assets/icons/tools/aws.svg";
import JiraIcon from "./assets/icons/tools/jira.svg";
import DockerIcon from "./assets/icons/tools/docker.svg";
import FigmaIcon from "./assets/icons/tools/figma.svg";
import AzureIcon from "./assets/icons/tools/azure.svg";
import LinuxIcon from "./assets/icons/tools/linux.svg";

interface SkillsSectionProps {
    skillsRef: React.RefObject<HTMLDivElement>;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsRef }) => {
    return (
        <div ref={skillsRef} id="skills" className="content content-skills">
            <h2 className="content__title">
                <span className="content__title-init">#</span>{" "}
                <span className="content__title-name">Skills</span>
            </h2>
            <div className="content__body">
                <div className="content__body__item">
                    <h3 className="content__body__item__title">Languages</h3>
                    <ul className="content__body__item__list">
                        <li className="content__body__item__list__item">
                            <img src={HtmlIcon} alt="HTML" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={CssIcon} alt="CSS" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={SassIcon} alt="Sass" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={JavaScriptIcon} alt="JavaScript" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={TypeScriptIcon} alt="TypeScript" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={PythonIcon} alt="Python" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={JavaIcon} alt="Java" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={CppIcon} alt="C++" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={CIcon} alt="C" />
                        </li>
                    </ul>
                </div>
                <div className="content__body__item">
                    <h3 className="content__body__item__title">Technologies</h3>
                    <ul className="content__body__item__list">
                        <li className="content__body__item__list__item">
                            <img src={ReactIcon} alt="React" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={ReduxIcon} alt="Redux" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={MaterialUiIcon} alt="Material UI" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={NodeJSIcon} alt="Node" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={ExpressIcon} id="express-svg" alt="Express" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={SocketIoIcon} id="socketio-svg" alt="Socket.io" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={SeleniumIcon} id="selenium-svg" alt="Selenium" />
                        </li>
                    </ul>
                </div>
                <div className="content__body__item">
                    <h3 className="content__body__item__title">Tools</h3>
                    <ul className="content__body__item__list">
                        <li className="content__body__item__list__item">
                            <img src={GitIcon} alt="Git" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={GithubIcon} alt="Github" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={AWSIcon} alt="AWS" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={AzureIcon} alt="Azure" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={HerokuIcon} alt="Heroku" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={DockerIcon} alt="Docker" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={LinuxIcon} alt="Linux" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={JiraIcon} alt="Jira" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={FigmaIcon} alt="Figma" />
                        </li>
                    </ul>
                </div>
                <div className="content__body__item">
                    <h3 className="content__body__item__title">Databases</h3>
                    <ul className="content__body__item__list">
                        <li className="content__body__item__list__item">
                            <img src={MySQLIcon} alt="MySQL" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={OracleIcon} alt="PostgreSQL" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={FirebaseIcon} alt="Firebase" />
                        </li>
                        <li className="content__body__item__list__item">
                            <img src={MongoDBIcon} alt="MongoDB" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
