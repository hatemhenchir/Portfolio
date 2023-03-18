import "../styles/Work.css";
import { BsFillEyeFill, BsGithub } from "react-icons/bs";
import result_summary_card from "../images/result-summary-card.png";
import article_preview_card from "../images/article-preview-card.png";
import intro_component_with_signup_form from "../images/Intro Component with Signup Form.png";
import faq_accordion_card from "../images/faq-accordion-card.png";
import interactive_rating_component from "../images/interactive_rating_component.png";
import ping_coming_soon_page from "../images/ping_coming_soon_page.png";
const Work = () => {
  return (
    <section className="work" id="work">
      <h2>Work</h2>
      <hr />
      <div className="work-grid">
        <article className="card-work">
          <div className="container-img-work">
            <img src={result_summary_card} alt="" />
            <div className="overlay">
              <div className="live-button">
                <a
                  href="https://hatemhenchir.github.io/results-summary-component/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillEyeFill />
                </a>
              </div>
              <div className="github-button">
                <a
                  href="https://github.com/hatemhenchir/results-summary-component"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <h3>Summary Card</h3>
          <p>
            responsive summary card component that displays a result summary of
            a particular skill or category with a peek-and-slide animation
            effect.
          </p>
          <div className="live-github-button">
            <div className="live-button">
              <a
                href="https://hatemhenchir.github.io/results-summary-component/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillEyeFill />
              </a>
            </div>
            <div className="github-button">
              <a
                href="https://github.com/hatemhenchir/results-summary-component"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </article>
        <article className="card-work">
          <div className="container-img-work">
            <img src={article_preview_card} alt="" />
            <div className="overlay">
              <div className="live-button">
                <a
                  href="https://hatemhenchir.github.io/article-preview-component-master/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillEyeFill />
                </a>
              </div>
              <div className="github-button">
                <a
                  href="https://github.com/hatemhenchir/article-preview-component-master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <h3>Article Preview Component</h3>
          <p>
            Responsive article preview component including a share button with
            fade-in animation in the social media icons.
          </p>
          <div className="live-github-button">
            <div className="live-button">
              <a
                href="https://hatemhenchir.github.io/article-preview-component-master/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFillEyeFill />
              </a>
            </div>
            <div className="github-button">
              <a
                href="https://github.com/hatemhenchir/article-preview-component-master"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </article>
        <article className="card-work">
          <div className="container-img-work">
            <img src={intro_component_with_signup_form} alt="" />
            <div className="overlay">
              <div className="live-button">
                <a
                  href="https://hatemhenchir.github.io/intro-component-with-signup-form/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillEyeFill />
                </a>
              </div>
              <div className="github-button">
                <a
                  href="https://github.com/hatemhenchir/intro-component-with-signup-form"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <h3>Signup Form</h3>
          <p>
            Responsive sign-up form that includes validation and error messages
            generate with react-hook-form.
          </p>
          <div className="live-github-button">
            <div className="live-button">
              <a href="https://hatemhenchir.github.io/intro-component-with-signup-form/">
                <BsFillEyeFill />
              </a>
            </div>
            <div className="github-button">
              <a href="https://github.com/hatemhenchir/intro-component-with-signup-form">
                <BsGithub />
              </a>
            </div>
          </div>
        </article>
        <article className="card-work">
          <div className="container-img-work">
            <img src={faq_accordion_card} alt="" />
            <div className="overlay">
              <div className="live-button">
                <a
                  href="https://hatemhenchir.github.io/faq-accordion-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillEyeFill />
                </a>
              </div>
              <div className="github-button">
                <a
                  href="https://github.com/hatemhenchir/faq-accordion-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <h3>FAQ Accordion Card</h3>
          <p>
            FAQ accordion card allows users to expand and collapse questions and
            answers in a clean and user-friendly interface.
          </p>
          <div className="live-github-button">
            <div className="live-button">
              <a href="https://hatemhenchir.github.io/faq-accordion-card">
                <BsFillEyeFill />
              </a>
            </div>
            <div className="github-button">
              <a href="https://github.com/hatemhenchir/faq-accordion-card">
                <BsGithub />
              </a>
            </div>
          </div>
        </article>
        <article className="card-work">
          <div className="container-img-work">
            <img src={interactive_rating_component} alt="" />
            <div className="overlay">
              <div className="live-button">
                <a
                  href="https://hatemhenchir.github.io/interactive-rating-component/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillEyeFill />
                </a>
              </div>
              <div className="github-button">
                <a
                  href="https://github.com/hatemhenchir/interactive-rating-component"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <h3>Interaction Rating Component</h3>
          <p>
            simple interaction rating component allows users to rate their
            experience on a scale of 1-5 stars.
          </p>
          <div className="live-github-button">
            <div className="live-button">
              <a href="https://hatemhenchir.github.io/interactive-rating-component/">
                <BsFillEyeFill />
              </a>
            </div>
            <div className="github-button">
              <a href="https://github.com/hatemhenchir/interactive-rating-component">
                <BsGithub />
              </a>
            </div>
          </div>
        </article>
        <article className="card-work">
          <div className="container-img-work">
            <img src={ping_coming_soon_page} alt="" />
            <div className="overlay">
              <div className="live-button">
                <a
                  href="https://hatemhenchir.github.io/ping-coming-soon-page/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFillEyeFill />
                </a>
              </div>
              <div className="github-button">
                <a
                  href="https://github.com/hatemhenchir/ping-coming-soon-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <h3>Ping Coming Soon Page</h3>
          <p>
            Responsive coming soon page for a fictional app caled Ping, that
            includes a subscription form with email validation and a success
            toast notification.
          </p>
          <div className="live-github-button">
            <div className="live-button">
              <a href="https://hatemhenchir.github.io/ping-coming-soon-page/">
                <BsFillEyeFill />
              </a>
            </div>
            <div className="github-button">
              <a href="https://github.com/hatemhenchir/ping-coming-soon-page">
                <BsGithub />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Work;
