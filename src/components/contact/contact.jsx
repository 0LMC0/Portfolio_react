import "./contact.css"
// icons
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io"
import { BsMessenger } from "react-icons/bs"
// emailJs
import { useRef } from "react"
import emailjs from "emailjs-com"
// sweetalert
import swal from 'sweetalert';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9yfldkx', 'template_mn1y3oo', form.current, 'Ci3hWyF6_Aufq63Ll')

    e.target.reset()

    swal("The message has been send", "I'm going to give a response in the following days!, Greetings, Lautaro", "success");
  };


  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <IoIosMail className="contact_option-icon"/>
            <h4>E-mail</h4>
            <h5>Lautycaceresss871@gmail.com</h5>
            <a href="mailto:lautycaceresss871@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Lauty Caceres</h5>
            <a href="https://m.me/whoslauty/" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+54 9 1132493803</h5>
            <a href="https://wa.me/5491132493803?text=Hola,%20I'm%20writing%20from%20the%20portfolio!" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={ form } onSubmit={ sendEmail }>
          <input type="text" name="name" placeholder="Your full name" required/>
          <input type="email" name="email" placeholder="Your E-mail" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>

  )
}

export default Contact