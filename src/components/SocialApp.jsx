import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import "../styles/SocialApp.css";
const SocialApp = () => {
  return (
    <div className="social-app">
        <div className="social-icon"><a
        href="https://www.linkedin.com/in/hatem-henchir-7a92141a8/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a></div>
      <div className="social-icon"><a
        href="https://github.com/hatemhenchir"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a></div>
      <div className="social-icon"><a
        href="https://www.frontendmentor.io/profile/hatemhenchir"
        target="_blank"
        rel="noreferrer"
      >
        <SiFrontendmentor />
      </a></div>
      
    </div>
  );
};
export default SocialApp;
