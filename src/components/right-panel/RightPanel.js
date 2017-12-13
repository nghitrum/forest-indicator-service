import React, { Component } from "react";
import Checkbox from "../general/Checkbox";

import "./rightpanel.scss";

class RightPanel extends Component {
  render() {
    let indicatorCategories = this.props.indicatorCategories;
    // console.log(this.props.indicatorCategories);
    const listItems = indicatorCategories.map((item, index) => (
      <div key={index} className="indicators">
        <h4>
          {item.name}&nbsp;{item.isMandatory === 1 ? "*" : ""}
        </h4>

        {item.indicators.map((indicator, index) => (
          // console.log(index, index === 0 && item.isMandatory ? true : false),
          <Checkbox
            key={indicator.id}
            id={indicator.id}
            description={indicator.name}
            name={indicator.name}
            dataType="indicator"
            selectedDataChange={this.props.handleSelectedDataChange}
            checked={index === 0 && item.isMandatory ? true : false}
          />
        ))}
      </div>
    ));

    return (
      <div className="panel-container">
        <h3 className="header-spacing-panels">Indikaattoreiden valinta</h3>
        {listItems}
      </div>
    );
  }
}

export default RightPanel;
