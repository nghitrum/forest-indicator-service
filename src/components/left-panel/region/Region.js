import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

import ForestData from "../../../data/ForestData";

class Region extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = value => {
    if (value !== null) {
      this.props.regionData(value);
    } else {
      this.props.regionData("");
    }
  };

  render() {
    const regionalLevel = this.props.regionalLevel;
    const regionList = this.props.regionList;
    const region = this.props.region;

    return (
      <div>
        <h4>Alue</h4>
        <Select
          name=""
          className=""
          value={region}
          onChange={this.handleChange}
          options={regionList}
        />
      </div>
    );
  }
}

export default Region;
