import React, {Component} from 'react';
import './Contacts.scss';
import {Form, Input, Button, message} from 'antd';
import {SendOutlined} from '@ant-design/icons';

import axios from 'axios';

export default class Contacts extends Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.state = {};
  }

  onChange = curState => {
    this.setState(prevState => ({
      ...prevState,
      email: {...prevState.email, ...curState},
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

    axios({
      method: 'post',
      url:
        'https://api.mailgun.net/v3/sandboxebf75d45a47a4a3d97e3563dea292e0d.mailgun.org/messages',
      params: {
        from: 'mailgun@sandboxebf75d45a47a4a3d97e3563dea292e0d.mailgun.org',
        to: 'engineer-think@tut.by',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomeness!',
      },
      headers: {
        Authorization: 'api:key-b548a128042e38a00b25e582402cafae',
      },
    });

    this.notification('Sended');
  };

  notification = status => {
    if (status.status === 200) {
      message.success(status);
    } else {
      message.error(status);
    }
  };

  render() {
    return (
      <div id="contacts" className="contacts-section">
        <div className="divider">contacts</div>

        <Form
          ref={this.form}
          className="form"
          layout="vertical"
          name="nest-messages">
          <h2>Send me an email</h2>
          <Form.Item name="name" rules={[{required: true}]}>
            <Input
              placeholder="Name"
              onChange={e => this.onChange({to: e.target.value})}
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {type: 'email', message: 'Wrong email!'},
              {required: true, message: 'Please, enter email!'},
            ]}>
            <Input
              placeholder="Email"
              onChange={e => this.onChange({to: e.target.value})}
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
              onChange={e => this.onChange({to: e.target.value})}
            />
          </Form.Item>

          <Form.Item name="text">
            <Input.TextArea
              placeholder="Text"
              onChange={e => this.onChange({to: e.target.value})}
            />
          </Form.Item>

          <Form.Item>
            <Button
              className="send-btn"
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
