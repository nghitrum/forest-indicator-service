import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import ForestData from "../../../data/ForestData";
class RegionLevels extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = value => {
    if (value !== null) {
      this.setState({ value });
    } else {
      this.setState({ value: "" });
    }
  };

  bindData() {
    let list = [];
    ForestData.getRegionLevels().then(function(result) {
      result.map(element => {
        list.push({
          value: element.id,
          label: element.name
        });
      });
    });

    return list;
  }

  render() {
    const regionLevelList = this.bindData();
    return (
      <div>
        <h4>Aluetaso</h4>
        <Select
          placeholder="Select region level"
          className="max"
          value={this.state.value}
          onChange={this.handleChange}
          options={regionLevelList}
        />
      </div>
    );
  }
}

export default RegionLevels;
