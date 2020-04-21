import React from 'react';
import {Link} from 'react-scroll';
import {Button} from 'antd';
import './Hello.scss';

const Hello = () => {
  return (
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
        link to my CV
      </Button>
    </div>
  );
};
export default Hello;
