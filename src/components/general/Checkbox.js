import React, { Component } from "react";

import "./styling.scss";


class Checkbox extends Component {
  
  render() {
    const { id, name, description } = this.props;
   
    return (
      <div>
        <label>
        
          <input
            id="cb_1"
            name={name}
            className="hidden"
            type="checkbox"/>
        
        <span>{description}</span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
