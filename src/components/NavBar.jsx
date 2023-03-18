import "../styles/NavBar.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [burgerState, setBurgerState] = useState(false);

  const toggleBurger = () => {
    setBurgerState(!burgerState);
  };
  return (
    <nav id="section">
      {isMobile && (
        <div className="mobile_nav">
          <div className="list_icons">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/hatem-henchir-7a92141a8/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://github.com/hatemhenchir"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.frontendmentor.io/profile/hatemhenchir"
                target="_blank"
                rel="noreferrer"
              >
                <SiFrontendmentor />
              </a>
            </div>
          </div>
          <div className="burger-icon" onClick={toggleBurger}>
            <HiMenuAlt4 />
          </div>
          {burgerState && (
            <div className="burger-icon-open close">
              <div className="hix" onClick={toggleBurger}>
                <HiX />
              </div>
              <div className="links">
                <a href="#home" onClick={toggleBurger}>HOME</a>
                <a href="#about" onClick={toggleBurger}>ABOUT</a>
                <a href="#work" onClick={toggleBurger}>WORK</a>
                <a href="#skills" onClick={toggleBurger}>SKILLS</a>
                <a href="#contact" onClick={toggleBurger}>CONTACT</a>
              </div>
            </div>
          )}
        </div>
      )}

      {!isMobile && (
        <div className="desktop_nav">
          <div>
            <a href="#home" >HOME</a>
          </div>
          <div>
            <a href="#about">ABOUT</a>
          </div>
          <div>
            <a href="#work">WORK</a>
          </div>
          <div>
            <a href="#skills">SKILLS</a>
          </div>
          <div>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
