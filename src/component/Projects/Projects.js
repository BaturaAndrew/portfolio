import React, {Component} from 'react';
import './Projects.scss';
import {Divider} from 'antd';
import CardProject from './Card/Card.js';


export default class Projects extends Component {
  state = {
    projects: require('./projects.json'),
  };
  render() {
    return (
      <div id="projects" className="flex-column">
        <Divider orientation="left" className="divider">
          projects
        </Divider>
        <div className="projects-section flex-row">
          {this.state.projects.map(project => {
            return (
              <CardProject
                key={project.imgName}
                imgName={project.imgName}
                imgSrc={project.imgSrc}
                ginHub={project.ginHub}
                appLink={project.appLink}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
