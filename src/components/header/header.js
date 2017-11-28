import React, { Component } from "react";

import ForestData from "./../../data/ForestData";

import "./header.scss";

class Header extends Component {
  render() {
    let id = 6;
    let id2 = 24;
    return (
      <div>
        <h1 className="top-header">
          <b>METSÄMITTARI</b>
        </h1>
      </div>
    );
  }
}

export default Header;
