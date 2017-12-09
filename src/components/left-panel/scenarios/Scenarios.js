import React, { Component } from "react";
import Checkbox from "../../general/Checkbox";

class Scenarios extends Component {

  render() {
    let scenarios = this.props.scenarios;
    const listItems = scenarios.map(item => (
      <Checkbox
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        selectedDataChange={this.props.selectedDataChange}
        dataType="scenario"
      />
    ));
    return (
      <div>
        <h4>Skenaariot</h4>
        {listItems}
      </div>
    );
  }
}

export default Scenarios;
