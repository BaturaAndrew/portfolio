import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div id="footer" className="footer-section">
      <section className="contacts">
        <div className="contact-container flex-row">
          <div className="github">
            <a href="https://github.com/BaturaAndrew">
              for contact Batura Andrew
            </a>
          </div>
          <div className="gmail">
            <a href="mailto:baturaandrew@gmail.com">baturaandrew@gmail.com</a>
          </div>

          <div className="skype">
            <a href="skype: batura_andrew">skype: batura_andrew</a>
          </div>
          <div className="phone">
            mob: <em>+37529 263 72 22</em>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Footer;
