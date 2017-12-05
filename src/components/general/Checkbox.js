import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { id, name, description } = this.props;

    return (
      <div>
        <label>
          {description}
          <input
            name={name}
            type="checkbox"
            //checked={this.state.isGoing}
            //onChange={this.handleInputChange}
          />
        </label>
      </div>
    );
  }
}

export default Checkbox;
