import { Document, Page, pdfjs } from 'react-pdf';
import resume from './assets/resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import eyeSVG from "./assets/eye.svg";
import downloadSVG from "./assets/download.svg";
import { useState } from 'react';

console.log(resume)

interface ResumeSectionProps {
    resumeRef: React.RefObject<HTMLDivElement>;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ resumeRef }) => {
    const [showResume, setShowResume] = useState(false);

    return (
        <div ref={resumeRef} id="resume" className="content content-resume">
            <h2 className="content__title">
                <span className="content__title-init">#</span>{" "}
                <span className="content__title-name">Resume</span>
            </h2>
            <div className={`content__body ${showResume ? "content__body--show" : ""}`}>
                {showResume &&
                    <Document file={resume}>
                        <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                }

                {!showResume && (
                    <button className="content__body__button" onClick={() => setShowResume(true)}>
                        <a>
                            <img src={eyeSVG} alt="eye" />
                            Show Resume
                        </a>
                    </button>
                )}
                <button className="content__body__button">
                    <a href="resume.pdf" target="_blank" rel="noreferrer">
                        <img src={downloadSVG} alt="download" />
                        Download Resume
                    </a>
                </button>
            </div>
        </div>
    );
};

