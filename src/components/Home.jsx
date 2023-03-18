import "../styles/Home.css";
import my_image from "../images/header.png";
import js_icon from "../images/js-icon.png";
import react_icon from "../images/react-icon.png";
import css_icon from "../images/css-icon.png";
import { useInView } from "react-intersection-observer";
const Home = () => {
  const { ref, inView } = useInView();

  return (
    <section className="home" id="home" ref={ref}>
      <div className="typograpgy-with-button">
        {inView && (
          <div className="hello-icon-with-typography">
            <div>
              <span className="hello-icon">👋</span>
            </div>
            <div>
              <p>Hello, I am</p>
              <h1>
                <span>H</span>
                <span>a</span>
                <span>t</span>
                <span>e</span>
                <span>m</span>
              </h1>
              <p>Frontend Developer</p>
            </div>
          </div>
        )}
        {inView && (
          <div className="resume-contact-button">
            <button className="resume">Resume</button>
            <button className="contact-me">Contact Me</button>
          </div>
        )}
      </div>

      {inView && (
        <div className="my-image-contain">
          <img src={my_image} alt="" />
        </div>
      )}
      {inView && (
        <div className="react-js-css-contain">
          <div className="js-icon-contain">
            <img src={js_icon} alt="" />
          </div>
          <div className="react-icon-contain">
            <img src={react_icon} alt="" />
          </div>
          <div className="css-icon-contain">
            <img src={css_icon} alt="" />
          </div>
        </div>
      )}
    </section>
  );
};
export default Home;
