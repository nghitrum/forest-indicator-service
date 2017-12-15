import React, { Component } from "react";

import "./styling.scss";
import {
  changeInputBackgroundColor,
  setCheckedBackgroundColor
} from "./utils.js";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor:", this.props.name, this.props.checked);
    this.state = {
      isChecked: this.props.checked
    };
  }

  toggleChange = event => {
    // Change style by jQuery
    if (this.props.dataType === "timePeriod") {
      changeInputBackgroundColor();
      setCheckedBackgroundColor(event.target.name);
    }

    let check = this.props.selectedDataChange({
      dataType: this.props.dataType,
      name: event.target.name,
      id: event.target.value
    });

    //console.log("toogle ", check);

    this.setState({
      isChecked: check
    });
  };

  // componentDidMount() {
  //   // setCheckedBackgroundColor(this.props.name);
  // }

  render() {
    if (this.props.selectedOptions) {
      const idList = this.props.selectedOptions.map(option => option.id);
      return (
        <div>
          <label
            data-toggle="tooltip"
            data-placement="auto"
            title={this.props.description}
          >
            <input
              value={this.props.id}
              name={this.props.name}
              type="checkbox"
              checked={idList.includes(this.props.id.toString())}
              onChange={this.toggleChange}
              className="hidden"
            />

            <span>{this.props.name}</span>
          </label>
        </div>
      );
    } else {
      return (
        <div>
          <label
            data-toggle="tooltip"
            data-placement="auto"
            title={this.props.description}
          >
            <input
              value={this.props.id}
              name={this.props.name}
              type="checkbox"
              checked={this.state.isChecked}
              onChange={this.toggleChange}
              className="hidden"
            />

            <span>{this.props.name}</span>
          </label>
        </div>
      );
    }
  }
}

export default Checkbox;
