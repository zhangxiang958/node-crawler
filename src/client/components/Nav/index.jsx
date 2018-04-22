import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavStyle from './style.scss';

class Nav extends React.Component {
  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <div className="nav">
        <ul className="nav-list">
          <li>
            <NavLink className="linker" 
            activeStyle={{color: '#44bbd0', borderBottom: '5px solid #488fce' }}
            to={`/`}>
                单文本演示
            </NavLink>
          </li>
          <li>
            <NavLink className="linker" 
            activeStyle={{color: '#44bbd0', borderBottom: '5px solid #488fce' }}
            to={`/muti`}>
                多文本演示
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;