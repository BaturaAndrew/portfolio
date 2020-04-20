import React, {Component} from 'react';
import './Contacts.scss';
import {Divider} from 'antd';
export default class Contacts extends Component {
  render() {
    return (
      <div id="contacts" className="contacts-section">
        <Divider orientation="left" className="divider">
          Contacts
        </Divider>
      </div>
    );
  }
}
