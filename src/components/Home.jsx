import "../styles/Home.css";
import my_image from "../images/header.png";
import js_icon from "../images/js-icon.png";
import react_icon from "../images/react-icon.png";
import css_icon from "../images/css-icon.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const Home = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const hello_icon_with_typography_and_button_animation = useAnimation();
  const image_animation = useAnimation();

  useEffect(() => {
    if (inView) {
      hello_icon_with_typography_and_button_animation.start({
        transform: "translateX(0)",
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeOut",
        },
      });
      image_animation.start({
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeOut",
        },
      });
    }
    if (!inView) {
      hello_icon_with_typography_and_button_animation.start({
        transform: "translateX(-50px)",
        opacity: 0,
        transition: {
          duration: 0,
        },
      });
      image_animation.start({
        scale: 0,
        opacity: 0,
        duration: 0,
      });
    }
  });

  return (
    <section className="home" id="home" ref={ref}>
      <div className="typograpgy-with-button">
        <motion.div
          className="hello-icon-with-typography"
          animate={hello_icon_with_typography_and_button_animation}
        >
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
        </motion.div>

        <motion.div
          className="resume-contact-button"
          animate={hello_icon_with_typography_and_button_animation}
        >
          <button className="resume">Resume</button>
          <button
            className="contact-me"
            onClick={(e) => {
              window.location.href = "#contact";
              e.preventDefault();
            }}
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.div className="my-image-contain" animate={image_animation}>
        <img src={my_image} alt="" />
      </motion.div>

      <motion.div className="react-js-css-contain" animate={image_animation}>
        <div className="js-icon-contain">
          <img src={js_icon} alt="" />
        </div>
        <div className="react-icon-contain">
          <img src={react_icon} alt="" />
        </div>
        <div className="css-icon-contain">
          <img src={css_icon} alt="" />
        </div>
      </motion.div>
    </section>
  );
};
export default Home;
