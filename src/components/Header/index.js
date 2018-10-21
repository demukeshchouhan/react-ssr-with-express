import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  // static defaultProps = {
  //     route: []
  // }
  // static propTypes = {
  //     route:
  // }
  render() {
    console.log(this.props);
    return (
      <div className="Header">
        <NavLink exact to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink exact to="/about" activeClassName="selected">
          About
        </NavLink>
        <NavLink exact to="/users" activeClassName="selected">
          Users
        </NavLink>
      </div>
    );
  }
}

export default Header;
