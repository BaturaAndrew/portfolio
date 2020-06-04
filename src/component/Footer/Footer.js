import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div id="footer" className="footer-section">
      <section className="contacts">
        <div className="contact-container flex-row">
          <a className="contact" href="https://github.com/BaturaAndrew">
            <div className="github" />
            <span> for contact Batura Andrew</span>
          </a>

          <a className="contact" href="mailto:baturaandrew@gmail.com">
            <div className="gmail" />
            <span> baturaandrew@gmail.com</span>
          </a>

          <a className="contact" href="skype: batura_andrew">
            <div className="skype"></div>
            <span>skype: batura_andrew</span>
          </a>
          <a
            className="contact"
            href="https://www.linkedin.com/in/андрей-батура-448249104/">
            <div className="linkedin"></div>
            <span>linkedin</span>
          </a>

          <a className="contact" href="tel:+37529 263 72 22">
            <div className="phone" />
            <span>
              mob: <em>+37529 263 72 22</em>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
export default Footer;
