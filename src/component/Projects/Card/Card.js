import React from 'react';
import './Card.scss';
import {Card, Button} from 'antd';
import {FundProjectionScreenOutlined, GithubOutlined} from '@ant-design/icons';

const {Meta} = Card;

const Project = props => {
  return (
    <div className="filter flex-column">
      <Card
        data-aos="zoom-out-right"
        data-aos-duration="500"
        className="card"
        hoverable
        cover={
          <a href={props.appLink} target="_blank" rel="noopener noreferrer">
            <img
              className="card__img"
              alt={props.imgName}
              src={require(`../assets/images/${props.imgSrc}`)}
            />
          </a>
        }
        actions={[
          <Button
            href={props.ginHub}
            target="_blank"
            type="link"
            icon={<GithubOutlined />}
          />,
          <Button
            href={props.appLink}
            target="_blank"
            type="link"
            icon={<FundProjectionScreenOutlined />}
          />,
        ]}>
        <Meta title={props.title} />
      </Card>
    </div>
  );
};
export default Project;
