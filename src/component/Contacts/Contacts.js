/* eslint-disable no-undef */

import React, {Component} from 'react';
import './Contacts.scss';
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
    if (!this.isValidForm()) {
      this.notification('Enter correct data');
      return false;
    }

    const from = `${this.state.name} ${this.state.from}`;

    Email.send({
      SecureToken: '014034f5-2e11-49d8-956f-eaf713e01ab9',
      To: 'baturaandrew@gmail.com',
      From: 'baturaandrew@gmail.com',
      Subject: this.state.subject,
      Body: from + ' ' + this.state.text,
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
        <Form
          ref={this.form}
          className="form"
          layout="vertical"
          name="nest-messages">
          <Form.Item name="name" rules={[{required: true}]}>
            <Input
              placeholder="Name"
              onChange={e => this.onChange({name: e.target.value})}
            />
          </Form.Item>

          <Form.Item
            name="from"
            rules={[
              {type: 'email', message: 'Wrong email!'},
              {required: true, message: 'Please, enter email!'},
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
      </div>
    );
  }
}
