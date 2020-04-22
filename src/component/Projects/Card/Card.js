import React from 'react';
import './Card.scss';
import {Card, Button} from 'antd';
import {FundProjectionScreenOutlined, GithubOutlined} from '@ant-design/icons';

const {Meta} = Card;

const Project = props => {
  return (
    // FIXME:  use a function instead of 'a' tag
    // https://stackoverflow.com/questions/42561137/link-cannot-appear-as-a-descendant-of-a-link
    <a
      className="filter"
      href={props.appLink}
      target="_blank"
      rel="noopener noreferrer">
      <Card
        data-aos="zoom-out-right"
        data-aos-duration="500"
        className="card"
        hoverable
        cover={
          <img
            className="card__img"
            alt={props.imgName}
            src={require(`../assets/images/${props.imgSrc}`)}
          />
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
        <Meta title={props.title} description={props.description} />
      </Card>
    </a>
  );
};
export default Project;
