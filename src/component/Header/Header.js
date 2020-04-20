import React, {Component} from 'react';
import {Link} from 'react-scroll';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <div className="navigation flex-row">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
            About
          </Link>

          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
            Projects
          </Link>

          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}>
            Contacts
          </Link>
        </div>

        <div className="flex-column">
          <div className="profile-detail" data-aos="zoom-out">
            <span className="name">CV Batura Andrew</span>
          </div>
        </div>
      </div>
    );
  }
}
