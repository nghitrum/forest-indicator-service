import React, { Component } from "react";
import Checkbox from "../../general/Checkbox";

class TimePeriods extends Component {
  render() {
    let timePeriods = this.props.timePeriods;
    const listItems = timePeriods.map(item => (
      <Checkbox
        key={item.id}
        id={item.id}
        description={item.yearStart + " - " + item.yearEnd}
        name={item.yearStart + " - " + item.yearEnd}
        selectedDataChange={this.props.selectedDataChange}
        dataType="timePeriod"
      />
    ));
    return (
      <div>
        <h4>Ajankohta</h4>
        {listItems}
      </div>
    );
  }
}

export default TimePeriods;
