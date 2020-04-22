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

          <div className="contact">
            <div className="tooltip">
              <div className="phone" />
              <div className="tooltiptext">+37529 263 72 22</div>
            </div>
            <span>
              <div className="phone" />
            </span>
            <span>
              mob: <em>+37529 263 72 22</em>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Footer;
