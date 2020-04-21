import React, {Component} from 'react';
import {Link} from 'react-scroll';
import {Button} from 'antd';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="navigation flex-row">
          <Link to="about" smooth={true} offset={-80} duration={500}>
            About
          </Link>

          <Link to="projects" smooth={true} offset={-80} duration={500}>
            Projects
          </Link>

          <Link to="contacts" smooth={true} offset={-80} duration={500}>
            Contacts
          </Link>
        </div>

        <div className="header-section">
          <div className="flex-column">
            <div className="profile-detail" data-aos="zoom-out">
              <span className="name">Portfolio</span>
            </div>
            <Button
              className="cv"
              type="link"
              target="_blank"
              href="https://drive.google.com/open?id=1hkyVRZEgIJPPvPhPVTmjhMJaHwFXb_90">
              CV Batura Andrew
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
