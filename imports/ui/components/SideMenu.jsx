import React, { Component, Text } from 'react';
import { slide as Menu } from 'react-burger-menu'
import '../styles/sidemenu.css'
export default class SideMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu noOverlay>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
