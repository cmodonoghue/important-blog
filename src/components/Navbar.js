import React from 'react';

import Smile from '../img/smile.svg';
import Menu from '../img/menu.svg';
import CloseMenu from '../img/close.svg';

class Navbar extends React.Component {
  constructor () {
    super();
    this.state = {
      isActive: false
    }
  }

  toggleMenu = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-title">
          <img className="navbar-title__img" src={Smile}></img>
          <h1 className="navbar-title__text">
            The Blog Where <span>Dreams</span> Come Alive
          </h1>
        </div>
        <div className="navbar-menu">
          <a 
            href="#" 
            className="navbar-menu__icon"
            onClick={this.toggleMenu}
          >
            <img src={Menu}></img>
          </a>
          <ul className="navbar-menu-list">
            <a className="navbar-menu-list__item">Science</a>
            <a className="navbar-menu-list__item">Culture</a>
            <a className="navbar-menu-list__item">Wisdom</a>
          </ul>
        </div>
        <div className={this.state.isActive ? 'navbar-overlay active' : 'navbar-overlay'}>
          <a 
            href="#" 
            className="navbar-menu__icon overlay"
            onClick={this.toggleMenu}
          >
            <img src={CloseMenu}></img>
          </a>
          <ul className="mobile-menu-list">
            <a className="mobile-menu-list__item">Science</a>
            <a className="mobile-menu-list__item">Culture</a>
            <a className="mobile-menu-list__item">Wisdom</a>
          </ul>
        </div> 
      </div>
    ) 
  }
}

export default Navbar;