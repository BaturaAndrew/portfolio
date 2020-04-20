import React, {Component} from 'react';
import './About.scss';
import {Divider} from 'antd';
export default class About extends Component {
  render() {
    return (
      <div>
        <Divider orientation="left" className="divider">
          About my experience
        </Divider>

        <div id="about" className="about-section">
          I am working at the united institute of informatic problems, in the
          laboratory of automation of technological processes. I develop
          software for automatic creating sketches of technological operations.
          Currenly I am working for Organizational and Technological Solutions
          as software engineer. I also studied independently node.js, an example
          in the gallery-task
          <h3>Education</h3>I graduated from BNTU with a specialty in automated
          design system faculty of information technologies and robotics I
          finished ABAP courses at LeverX in 2015.
        </div>
      </div>
    );
  }
}
