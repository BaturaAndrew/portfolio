import React, {Component} from 'react';
import './Contacts.scss';
import {Divider} from 'antd';
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
        <Divider orientation="left" className="divider">
          contacts
        </Divider>

        <Form
          ref={this.form}
          className="form"
          layout="vertical"
          name="nest-messages">
          <Form.Item name="name" label="Name" rules={[{required: true}]}>
            <Input onChange={e => this.onChange({to: e.target.value})} />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {type: 'email', message: 'Wrong email!'},
              {required: true, message: 'Please, enter email!'},
            ]}>
            <Input onChange={e => this.onChange({to: e.target.value})} />
          </Form.Item>

          <Form.Item
            name="subject"
            label="Subject"
            rules={[
              {
                required: true,
                message: 'Please, enter subject!',
              },
            ]}>
            <Input onChange={e => this.onChange({to: e.target.value})} />
          </Form.Item>

          <Form.Item name="text" label="Text">
            <Input.TextArea
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
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
