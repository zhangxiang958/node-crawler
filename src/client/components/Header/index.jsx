import React from 'react';
import Style from './style.scss';

class Header extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <div className="Header">
        <i className="Header-icon"></i>
        <div className="Header-name">
          NLP Platform
        </div>
        <div className="Header-author">
          Design By shawncheung
        </div>
      </div>
    );
  }
}

export default Header;