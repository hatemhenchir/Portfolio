import "../styles/Contact.css";
import phone from "../images/phone.png";
import email from "../images/email.png";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          e.target.reset(); // Reset the form
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send email. Please try again!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          
        }
      );
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <hr />
      <div className="grid_contact">
        <div className="phone_email">
          <img src={email} alt="" />
          <a href="mailto:hatemhenchir@gmail.com">hatemhenchir@gmail.com</a>
        </div>
        <div className="phone_email">
          <img src={phone} alt="" />
          <a href="tel:+21623788409">+216 23 788 409</a>
        </div>
      </div>
      <form action="" className="form_contact" onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Your Name"
          required
          minLength={4}
          name="from_name"
        />
        <input
          type="email"
          id=""
          placeholder="Your Email"
          required
          name="from_email"
        />
        <textarea
          placeholder="Your message"
          required
          minLength={15}
          name="message"
        />
        <button className="send_button_email" type="submit">
          Send Message
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};
export default Contact;
