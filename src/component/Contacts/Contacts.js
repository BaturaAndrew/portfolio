/* eslint-disable no-undef */

import React, {Component} from 'react';
import './Contacts.scss';
import './animated.scss';
import {Form, Input, Button, message} from 'antd';
import {SendOutlined} from '@ant-design/icons';

export default class Contacts extends Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.state = {to: 'baturaandrew@gmail.com'};
  }

  onChange = curState => {
    this.setState(prevState => ({
      ...prevState,
      ...curState,
    }));
  };

  onMouse = event => {
    if (event.type === 'mouseover') {
      if (event.target.classList.value === 'header') {
        event.target.classList.add('rubberBand');
      }
      if (event.target.classList.value === 'skils') {
        event.target.classList.add('skil-color');
      }
    }
    if (event.type === 'mouseout') {
      if (event.target.classList.value === 'header rubberBand') {
        event.target.classList.remove('rubberBand');
      }
      if (event.target.classList.value === 'skils skil-color') {
        event.target.classList.remove('skil-color');
      }
    }
  };

  isValidForm = () => {
    const fieldErrors = this.form.current.getFieldsError();
    const countErrors = fieldErrors.reduce(
      (count, item) => count + item.errors.length,
      0
    );
    if (countErrors > 0) {
      return false;
    }
    return true;
  };

  sendEmail = () => {
    const {name, from, subject} = this.state;
    if (!this.isValidForm()) {
      message.error('Enter correct data');
      return false;
    }
    if (!name || !from || !subject) {
      message.error('Fill all requared fields');
      return false;
    }
    const sender = `${this.state.name} ${this.state.from}`;

    Email.send({
      SecureToken: '014034f5-2e11-49d8-956f-eaf713e01ab9',
      To: 'baturaandrew@gmail.com',
      From: 'baturaandrew@gmail.com',
      Subject: this.state.subject,
      Body: sender + ' ' + this.state.text,
    }).then(
      rez =>
        this.setState(
          prevState => ({
            ...prevState,
            ...{status: rez},
          }),
          this.notification
        ),
      error =>
        this.setState(
          prevState => ({
            ...prevState,
            ...{status: error},
          }),
          this.notification
        )
    );
  };

  notification = () => {
    if (this.state.status === 'OK') {
      message.success(this.state.status);
    } else {
      message.error(this.state.status);
    }
  };

  render() {
    return (
      <div id="contacts" className="contacts-section">
        <div className="divider">contacts</div>

        <h2>
          If you have any questions, send me an e-mail at
          <a className="contact" href="mailto:baturaandrew@gmail.com">
            <div className="gmail" />
            <span> baturaandrew@gmail.com</span>
          </a>
          , or use <span>form</span> below.
        </h2>
        <div className="contact__block flex-row">
          <Form
            ref={this.form}
            className="form"
            layout="vertical"
            name="nest-messages">
            <Form.Item
              name="name"
              rules={[{required: true, message: 'Please, enter name!'}]}>
              <Input
                placeholder="Name"
                onChange={e => this.onChange({name: e.target.value})}
              />
            </Form.Item>

            <Form.Item
              name="from"
              rules={[
                {type: 'email', message: 'Wrong email!'},
                {
                  required: true,
                  message: 'Please, enter email!',
                },
              ]}>
              <Input
                placeholder="Email"
                onChange={e => this.onChange({from: e.target.value})}
              />
            </Form.Item>

            <Form.Item
              name="subject"
              rules={[
                {
                  required: true,
                  message: 'Please, enter subject!',
                },
              ]}>
              <Input
                placeholder="Subject"
                onChange={e => this.onChange({subject: e.target.value})}
              />
            </Form.Item>

            <Form.Item name="text">
              <Input.TextArea
                placeholder="Text"
                onChange={e => this.onChange({text: e.target.value})}
              />
            </Form.Item>

            <Form.Item>
              <Button
                className="send-btn flex-row"
                type="primary"
                htmlType="button"
                onClick={this.sendEmail}
                icon={<SendOutlined />}>
                Send
              </Button>
            </Form.Item>
          </Form>

          <div className="text-zone">
            <h1 aria-label=" Skills">
              <span
                className="header"
                onMouseOver={e => this.onMouse(e)}
                onMouseOut={e => this.onMouse(e)}>
                Skills
              </span>
            </h1>
            <p>
              The main area of my expertise is frontend development (client side
              of the web).
            </p>
            <p>
              <span
                className="skils"
                onMouseOver={e => this.onMouse(e)}
                onMouseOut={e => this.onMouse(e)}>
                HTML
              </span>
              ,&nbsp;
              <span
                className="skils"
                onMouseOver={e => this.onMouse(e)}
                onMouseOut={e => this.onMouse(e)}>
                CSS
              </span>
              ,&nbsp;
              <span
                className="skils"
                onMouseOver={e => this.onMouse(e)}
                onMouseOut={e => this.onMouse(e)}>
                JS
              </span>
              , building small and medium web apps with{' '}
              <span
                className="skils"
                onMouseOver={e => this.onMouse(e)}
                onMouseOut={e => this.onMouse(e)}>
                React
              </span>
              , features, animations.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
