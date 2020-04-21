import React from 'react';
import {Link} from 'react-scroll';
import './Navigation.scss';

 const Navigation = () => {
  return (
    <div className="navigation flex-row">
      <Link to="hello" smooth={true} offset={-80} duration={500}>
        Hello
      </Link>
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
  );
};
export default Navigation;