import Image from 'next/image';
import githubLogo from "public/images/githubLogo.png";
import linkedinLogo from "public/images/linkedinLogo.png";

const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '10vh',
};

const iconContainerStyle = {
  display: 'flex',
  gap: '10px', // Add some space between the icons
};

export default function Footer() {
    return (
      <footer className="p-4 text-center" style={footerStyle}>
                <div style={iconContainerStyle}>
        <a href="https://github.com/cjsquared-dev" target="_blank" rel="noopener noreferrer">
                    <Image src={githubLogo} alt="Github Logo" className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/christopherjohnson1006/" target="_blank" rel="noopener noreferrer">
                    <Image src={linkedinLogo} alt="LinkedIn Logo" className="footer-icon" />
                </a>
                </div>
                    <p>© 2024 CJSquared-Dev</p>
      </footer>
    );
  }
  

