import React from 'react';
import './Card.scss';
import {Card, Button} from 'antd';
import {FundProjectionScreenOutlined, GithubOutlined} from '@ant-design/icons';

const {Meta} = Card;

const CardProject = props => {
  return (
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
  );
};
export default CardProject;
