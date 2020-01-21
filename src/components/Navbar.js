import React, { Component } from "react";
import logo from "../images/logo.svg";

import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/resort/">
              <img src={logo} alt="Beach Resort"></img>
            </Link>
            <button
              type="button"
              onClick={this.handleToggle}
              className="nav-btn"
            >
              <FaAlignRight className="nav-icon"></FaAlignRight>
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/resort/">Home</Link>
            </li>
            <li>
              <Link to="/resort/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
