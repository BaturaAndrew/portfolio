import React, {Component} from 'react';
import './About.scss';
import {Divider} from 'antd';
import ava from './assets/ava.png';
export default class About extends Component {
  render() {
    return (
      <div>
        <div id="about" className="about-section flex-column">
          <Divider orientation="left" className="divider">
            About my experience
          </Divider>
          <div className="about-me flex-row">
            <img
              className="about-me__ava"
              src={ava}
              data-aos="zoom-out-right"
              data-aos-duration="500"
            />
            <div
              className="about-me__text"
              data-aos="zoom-out-left"
              data-aos-duration="500">
              I am working at the united institute of informatic problems, in
              the laboratory of automation of technological processes. I develop
              software for automatic creating sketches of technological
              operations. Currenly I am working for Organizational and
              Technological Solutions as software engineer. I also studied
              independently node.js, an example in the gallery-task
              <h3>Education</h3>I graduated from BNTU with a specialty in
              automated design system faculty of information technologies and
              robotics I finished ABAP courses at LeverX in 2015.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
