import React, { Component } from "react";
import Checkbox from "../../general/Checkbox";

class TimePeriods extends Component {
  render() {
    let timePeriods = this.props.timePeriods;
    const listItems = timePeriods.map((item, index) => (
      <Checkbox
        key={item.id}
        id={item.id}
        description={item.yearStart + " - " + item.yearEnd}
        name={item.yearStart + " - " + item.yearEnd}
        selectedDataChange={this.props.selectedDataChange}
        dataType="timePeriod"
        checked={index === 0 ? true : false}
      />
    ));
    return (
      <div className="time-periods">
        <h4>Ajankohta</h4>
        {listItems}
      </div>
    );
  }
}

export default TimePeriods;
