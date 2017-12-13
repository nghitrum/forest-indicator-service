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

    console.log("toogle", check);

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
    const { id, name, description, checked } = this.props;
    //  console.log(this.state);
    return (
      <div>
        <label>
          <input
            value={id}
            name={name}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
            className="hidden"
          />

          <span>{description}</span>
        </label>
      </div>
    );
  }
}

export default Checkbox;
