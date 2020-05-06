import React from 'react';
import {Link} from 'react-scroll';
import {Button} from 'antd';
import './Hello.scss';

const Hello = () => {
  return (
    <div id="hello" className="header-section flex-column">
      <div
        className="profile-detail flex-column"
        data-aos="zoom-out-right"
        data-aos-duration="1000">
        <span className="name"> Hello, I'm Batura Andrew.</span>
        <p className="hello">
          I build responsive websites. Look below at my&nbsp;
          <Link to="projects" smooth={true} offset={-80}>
            works
          </Link>
          , and&nbsp;
          <Link to="contacts" smooth={true} offset={-80}>
            contact&nbsp;
          </Link>
          me. Feel free.
        </p>
      </div>
      <Button
        data-aos="zoom-out"
        data-aos-duration="500"
        className="cv"
        type="link"
        target="_blank"
        href="https://drive.google.com/file/d/16gW1ohHBvyxBtS_b5qYVAsHIYnnNPTan/view?usp=sharing">
        link to my CV
      </Button>
    </div>
  );
};
export default Hello;
