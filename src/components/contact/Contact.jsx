import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsCodeSquare } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_v92p7e4',
      'template_00zv3uf',
      form.current,
      'gfoUvcjrblLSUAY5P'
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>merayo.rafa@gmail.com</h5>
            <a href="mailto:umarber94@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
            <AiFillLinkedin className="contact-option-icon" />
            <h4>Linkedin</h4>
            <h5>Rafael Merayo Ramos</h5>
            <a
              href="https://www.linkedin.com/in/rafaelmerayo/"
              rel="noreferrer"
              target="_blank"
            >
              See profile
            </a>
          </article>
          <article className="contact-option">
            <BsCodeSquare className="contact-option-icon" />
            <h4>GitHub</h4>
            <h5>Rafael Merayo Ramos</h5>
            <a
              href="https://github.com/RafaMR"
              rel="noreferrer"
              target="_blank"
            >
              See profile
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
