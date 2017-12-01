import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

class Region extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    dropdownLoadBool: true,
    dropdownDisabledBool: true
  };

  handleChange = value => {
    if (value !== null) {
      this.props.regionData(value);
    } else {
      this.props.regionData("");
    }
  };

  componentWillReceiveProps() {
    if (this.props.regionList !== undefined || null) {
      this.setState({ dropdownDisabledBool: false, dropdownLoadBool: false });
    } else {
      this.setState({ dropdownDisabledBool: true, dropdownLoadBool: true });
    }
  }

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
          isLoading={this.state.dropdownLoadBool}
          disabled={this.state.dropdownDisabledBool}
        />
      </div>
    );
  }
}

export default Region;
