import React, {Component} from 'react';
import {Link} from 'react-scroll';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="navigation flex-row">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            About
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Projects
          </Link>

          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
            Contacts
          </Link>
        </div>

        <div className="header-section">
          <div className="flex-column">
            <div className="profile-detail" data-aos="zoom-out">
              <span className="name">CV Batura Andrew</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
