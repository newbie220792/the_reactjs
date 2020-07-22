import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user">User</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/product">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/details">Details</a>
          </li>
        </ul>
      </nav>

    );
  };
}

export default Header;
