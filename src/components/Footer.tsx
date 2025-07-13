import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const cy = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-row justify-between items-center w-full bg-gray-900 text-white px-8 py-6">
        {/* Left side: Text */}
        <h1>© {cy} Mahin Rajput. All rights reserved</h1>

        {/* Right side: Social Icons */}
        <div className="flex flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/mahin-rajput/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/Mahin-Rajput"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
