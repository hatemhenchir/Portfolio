import "../styles/Contact.css";
import phone from "../images/phone.png";
import email from "../images/email.png";
const Contact =()=>{
    return(
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <hr/>
            <div className="grid_contact">
                <div className="phone_email">
                    <img src={email} alt="" />
                    <a href="mailto:hatemhenchir@gmail.com">hatemhenchir@gmail.com</a>
                </div>
                <div className="phone_email">
                    <img src={phone} alt="" />
                    <a href="tel:+21623788409">+126 23 788 409</a>
                </div>
            </div>
            <form action="" className="form_contact">
                <input type="text" placeholder="Your Name" required minLength={4} />
                <input type="email" name="" id="" placeholder="Your Email" required />
                <textarea placeholder="Your message" required minLength={15}/>
                <button className="send_button_email">Send Message</button>
            </form>
        </section>
    )
}
export default Contact;