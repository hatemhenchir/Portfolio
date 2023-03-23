import "../styles/About.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const About = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const about_me_animation = useAnimation();
  const cards_animation = useAnimation();
  useEffect(() => {
    if (inView) {
      about_me_animation.start({
        transform: "translateX(0)",
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeOut",
        },
      });
      cards_animation.start({
        transform: "translateX(0)",
        opacity: 1,
        transition: {
          duration: 0.9,
          ease: "easeOut",
        },
      });
    }
    if (!inView) {
      about_me_animation.start({
        transform: "translateX(-100%)",
        opacity: 0,
        transition: {
          duration: 0,
        },
      });
      cards_animation.start({
        transform: "translateX(100%)",
        opacity: 0,
        transition: {
          duration: 0,
        },
      });
    }
  }, [about_me_animation, inView, cards_animation]);
  return (
    <section className="about" id="about" ref={ref}>
      <h2>About me</h2>
      <hr />

      <div className="about-grid">
        <motion.article
          className="details-about-me"
          animate={about_me_animation}
        >
          <h3>Information about me</h3>
          <p>
            Experienced frontend developer with ReactJS proficiency. Passionate
            about creating visually stunning web applications with exceptional
            user experiences using HTML, CSS, and JavaScript.
          </p>
        </motion.article>
        <motion.div className="cards-about" animate={cards_animation}>
          <article className="item">
            <span>4+</span>
            <hr />
            <p>MONTHS OF PRACTISE</p>
          </article>
          <article className="item">
            <span>100%</span>
            <hr />
            <p>WILLINGNESS TO LEARN</p>
          </article>
          <article className="item">
            <span>100%</span>
            <hr />
            <p>DEDICATION AND HARD WORK</p>
          </article>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
