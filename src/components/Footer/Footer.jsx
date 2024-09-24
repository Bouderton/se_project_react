import "./Footer.css";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>Developed by Ryan Khazal 2024</div>
      <div className="footer__info-container">
        <a
          rel="noopener noreferer"
          target="_blank"
          href="https://www.linkedin.com/in/ryankhazal/"
        >
          <img
            src={linkedin}
            alt="LinkedIn Icon"
            className="footer__info-icon"
          />
        </a>
        <a
          rel="noopener noreferer"
          target="_blank"
          href="https://github.com/Bouderton"
        >
          <img src={github} alt="Github Icon" className="footer__info-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
