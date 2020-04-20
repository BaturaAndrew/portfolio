import React, {Component} from 'react';
import './Projects.scss';
import {Card, Divider, Button} from 'antd';
import {FundProjectionScreenOutlined, GithubOutlined} from '@ant-design/icons';

const {Meta} = Card;

export default class Projects extends Component {
  render() {
    return (
      <div id="projects" className="flex-column">
        <Divider orientation="left" className="divider">
          Projects
        </Divider>
        <div className="projects-section flex-row">
          <Card
            data-aos="zoom-out-right"
            data-aos-duration="500"
            className="card "
            hoverable
            cover={<img className="card__img piskel" />}
            actions={[
              <Button
                href="https://github.com/BaturaAndrew/tic_tac_toe"
                target="_blank"
                icon={<GithubOutlined />}
              />,
              <Button
                href="https://peaceful-sammet-a142f9.netlify.com"
                target="_blank"
                icon={<FundProjectionScreenOutlined />}
              />,
            ]}>
            <Meta title="Piskel" description="www.instagram.com" />
          </Card>
          <Card
            data-aos="zoom-out-right"
            data-aos-duration="500"
            className="card"
            hoverable
            cover={<img className="card__img weather" />}
            actions={[
              <Button
                href="https://github.com/BaturaAndrew/tic_tac_toe"
                icon={<GithubOutlined />}
              />,
              <Button
                href="https://peaceful-sammet-a142f9.netlify.com"
                target="_blank"
                icon={<FundProjectionScreenOutlined />}
              />,
            ]}>
            <Meta title="Fancy weather" description="www.instagram.com" />
          </Card>
          <Card
            data-aos="zoom-out-left"
            data-aos-duration="500"
            className="card"
            hoverable
            cover={<img className="card__img neutron" />}
            actions={[
              <Button
                href="https://github.com/BaturaAndrew/tic_tac_toe"
                target="_blank"
                icon={<GithubOutlined />}
              />,
              <Button
                href="https://peaceful-sammet-a142f9.netlify.com"
                target="_blank"
                icon={<FundProjectionScreenOutlined />}
              />,
            ]}>
            <Meta title="Neutron" description="www.instagram.com" />
          </Card>
          <Card
            data-aos="zoom-out-left"
            data-aos-duration="500"
            className="card"
            hoverable
            cover={<img className="card__img tic-tac-toe" />}
            actions={[
              <Button
                href="https://github.com/BaturaAndrew/tic_tac_toe"
                target="_blank"
                icon={<GithubOutlined />}
              />,
              <Button
                href="https://peaceful-sammet-a142f9.netlify.com"
                target="_blank"
                icon={<FundProjectionScreenOutlined />}
              />,
            ]}>
            <Meta
              title="Tic-tac-toe"
              description="https://peaceful-sammet-a142f9.netlify.com"
              target="_blank"
            />
          </Card>
        </div>
      </div>
    );
  }
}
