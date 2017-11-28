import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import ForestData from "../../../data/ForestData";

class RegionLevels extends Component {
	constructor(props) {
		super(props);
    let regionLevelList = [];
  }
  componentDidMount() {
    this.regionLevelList = [
      {
        id: 1,
        name: "hello"
      },
      {
        id: 2,
        name: "world"
      }
		];
		
		// get data from ForestData.js
  }
  render() {
    return (
      <div>
        <h4>Aluetaso</h4>
        <Select
          name=""
          className="max"
          //value={}
          //onChange={}
          options={[{ value: this.regionLevelList.id, label: this.regionLevelList.name }]}
        />
      </div>
    );
  }
}

export default RegionLevels;
