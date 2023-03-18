import "../styles/About.css";
import { useInView } from "react-intersection-observer";
const About = () => {
    const {ref,inView}=useInView();
  return (
    <section className="about" id="about" ref={ref}>
      <h2>About me</h2>
      <hr/>
      {inView&&(
      <div className="about-grid">
        <article className="details-about-me">
          <h3>Information about me</h3>
          <p>
            I'm a frontend developer with a passion for creating exceptional web
            experiences that inspire and engage. My approach to development is
            equal parts technical expertise and artistic creativity.
          </p>
        </article>
        <div className="cards-about">
          <article className="item">
            <span>4+</span>
            <hr/>
            <p>MONTHS OF PRACTISE</p>
          </article>
          <article className="item">
            <span>100%</span>
            <hr/>
            <p>WILLINGNESS TO LEARN</p>
          </article>
          <article className="item">
            <span>100%</span>
            <hr/>
            <p>DEDICATION AND HARD WORK</p>
          </article>
        </div>
      </div>)}
    </section>
  );
};
export default About;
