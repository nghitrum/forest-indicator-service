import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
class RegionLevels extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = value => {
    if (value !== null) {
      this.props.regionalLevelData(value);
    } else {
      this.props.regionalLevelData("");
    }
  };

  render() {
    const regionalLevel = this.props.regionalLevel;
    const regionalLevelList = this.props.regionalLevelList; 
    
    return (
      <div>
        <h4>Aluetaso</h4>
        <Select
          placeholder="Select region level"
          className="max"
          value={regionalLevel}
          onChange={this.handleChange}
          options={regionalLevelList}
        />
      </div>
    );
  }
}

export default RegionLevels;
