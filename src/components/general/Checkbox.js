import React, { Component } from "react";

import "./styling.scss";
import {
  changeInputBackgroundColor,
  setCheckedBackgroundColor
} from "./utils.js";

class Checkbox extends Component {
  constructor(props) {
    super(props);
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

    // console.log("toogle", check);

    this.setState({
      isChecked: check
    });
  };

  componentWillReceiveProps() {
    if (this.state.isChecked === true && this.props.dataType === "indicator") {
      // console.log("componentWillReceiveProps");
      this.props.selectedDataChange({
        dataType: this.props.dataType,
        name: this.props.name,
        id: this.props.id.toString()
      });

      setCheckedBackgroundColor(this.props.name);
    }
  }

  componentDidMount() {
    if (this.props.checked === true) {
      this.props.selectedDataChange({
        dataType: this.props.dataType,
        name: this.props.name,
        id: this.props.id.toString()
      });

      setCheckedBackgroundColor(this.props.name);
    }
  }

  render() {
    // console.log(this.props.description);
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

export default Checkbox;
