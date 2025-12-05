import { Download, FileText } from "lucide-react";

const MobileResume = () => {
  return (
    <div id="mobile-resume">
      <div id="mobile-resume-preview">
        <div id="mobile-resume-icon">
          <FileText size={64} />
        </div>
        <h3 id="mobile-resume-filename">Resume.pdf</h3>
        <p id="mobile-resume-info">PDF Document</p>
      </div>

      <div id="mobile-resume-actions">
        <a
          id="mobile-resume-download"
          href="files/resume.pdf"
          download
          className="mobile-resume-btn primary"
        >
          <Download size={20} />
          <span>Download Resume</span>
        </a>
        <a
          id="mobile-resume-view"
          href="files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-resume-btn secondary"
        >
          <FileText size={20} />
          <span>View in Browser</span>
        </a>
      </div>
    </div>
  );
};

export default MobileResume;

