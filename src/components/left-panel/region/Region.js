import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";

import ForestData from "../../../data/ForestData";

class Region extends Component {
  

  render() {
    const { id, name } = this.props;
    return (
      <div>
        <h4>Alue</h4>
        <Select
          name=""
          className=""
          //value={}
          //onChange={}
          options={[{ value: this.props.id, label: this.props.name }]}
        />
      </div>
    );
  }
}

export default Region;
