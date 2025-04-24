import Image from 'next/image';
import githubLogo from "public/images/githubLogo.png";
import linkedinLogo from "public/images/linkedinLogo.png";

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-800 text-white text-center">
      <div className="flex justify-center gap-8 mb-4">
        {/* GitHub Link */}
        <a
          href="https://github.com/cjsquared-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={githubLogo}
            alt="GitHub Logo"
            className="w-10 h-10 transition-transform duration-300 group-hover:scale-125 group-hover:brightness-150"
            style={{ filter: 'brightness(13.0)' }}
          />
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/christopherjohnson1006/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            src={linkedinLogo}
            alt="LinkedIn Logo"
            className="w-10 h-10 transition-transform duration-300 group-hover:scale-125 group-hover:brightness-150"
          />
        </a>
      </div>
      <p>© 2025 CJSquared-Dev</p>
    </footer>
  );
}