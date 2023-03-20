import "../styles/Skills.css";
import html from "../images/html.png";
import css from "../images/css-icon.png";
import js from "../images/js-icon.png";
import react_icon from "../images/react-icon.png";
import git from "../images/git.png";
import frame_motion from "../images/frame_motion.svg";
const Skills=()=>{
    return(
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <hr/>
            <article className="all_skills">
                <div className="skills_contain">
                    <img src={html} alt="" />
                </div>
                <div className="skills_contain">
                    <img src={css} alt="" />
                </div>
                <div className="skills_contain">
                    <img src={js} alt="" />
                </div>
                <div className="skills_contain">
                    <img src={react_icon} alt="" />
                </div>
                <div className="skills_contain">
                    <img src={git} alt="" />
                </div>
                <div className="skills_contain">
                    <img src={frame_motion} alt="" />
                </div>
            </article>
        </section>
    )
}
export default Skills;