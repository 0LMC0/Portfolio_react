import "./contact.css"
// icons
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io"
import { BsMessenger } from "react-icons/bs"

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <IoIosMail />
            <h4>E-mail</h4>
            <h5>Lautycaceresss871@gmail.com</h5>
            <a href="mailto:lautycaceresss871@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>Lauty Caceres</h5>
            <a href="https://m.me/whoslauty/">Send a message</a>
          </article>

          <article className="contact_option">
            <IoLogoWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+54 9 1132493803</h5>
            <a href="https://wa.me/5491132493803?text=Hola,%20I'm%20writing%20from%20the%20portfolio!">Send a message</a>
          </article>
        </div>
        <form action="">

        </form>
      </div>
    </section>

  )
}

export default Contact