import React, {Component} from 'react';
import './Projects.scss';

import {Card,Divider} from 'antd';
const {Meta} = Card;

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Divider orientation="left" className="divider">
          Projects
        </Divider>
        <div id="projects" className="projects-section flex-row">
          <Card
            className="card"
            hoverable
            style={{width: 240}}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            className="card"
            hoverable
            style={{width: 240}}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            className="card"
            hoverable
            style={{width: 240}}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            className="card"
            hoverable
            style={{width: 240}}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </div>
    );
  }
}
