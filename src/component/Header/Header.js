import React from 'react';
import {Link} from 'react-scroll';
import {Button} from 'antd';
import './Header.scss';
import Navigation from './Navigation/Navigation.js';

const Header = () => {
  return (
    <div>
      <Navigation />

      <div id="hello" className="header-section flex-column">
        <div className="profile-detail flex-column">
          <span className="name"> Hello, I'm Batura Andrew.</span> <br />
          <p className="hello">
            I build responsive websites, easy to use JS libraries. Look below at
            my&nbsp;
            <Link to="projects" smooth={true} offset={-80} duration={500}>
              works
            </Link>
            , and&nbsp;
            <Link to="contacts" smooth={true} offset={-80} duration={500}>
              contact
            </Link>{' '}
            me. Feel free
          </p>
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
  );
};
export default Header;
