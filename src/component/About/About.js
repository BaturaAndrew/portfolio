import React from 'react';
import './About.scss';
import ava from './assets/ava.png';
const About = () => {
  return (
    <div>
      <div id="about" className="about-section flex-column">
        <h2 className="divider">little about me</h2>
        <div className="about-me flex-row">
          <img
            className="about-me__ava"
            src={ava}
            alt="avatar"
            data-aos="zoom-out"
            data-aos-duration="600"
          />
          <div className="flex-column">
            <div
              className="about-me__text"
              data-aos="fade-up"
              data-aos-duration="500">
              <h3>education</h3>I graduated from BNTU with a specialty in
              automated design system faculty of information technologies and
              robotics.
            </div>
            <div
              className="about-me__text"
              data-aos="fade-down"
              data-aos-duration="500">
              <h3>work</h3> I worked at the United institute of informatic
              problems, in the laboratory of automation of technological
              processes. I develop software for automatic creating sketches of
              technological operations. Currenly I am working at Organizational
              and Technological Solutions as software engineer. The job is
              related to very old IBM RPG programming languige, so I decided to
              explore some new programming area.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
