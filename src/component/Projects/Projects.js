import React, {Component} from 'react';
import './Projects.scss';
import Card from './Card/Card.js';

export default class Projects extends Component {
  state = {
    projects: require('./assets/projects.json'),
  };
  render() {
    return (
      <div id="projects" className="flex-column">
        <div className="divider">projects</div>
        <div className="projects-section flex-row">
          {this.state.projects.map(project => {
            return <Card key={project.imgName} {...project} />;
          })}
        </div>
      </div>
    );
  }
}
