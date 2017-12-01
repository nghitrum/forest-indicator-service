import React, { Component } from "react";

import RegionLevel from "./region-level/RegionLevel";
import Region from "./region/Region";
import ScenarioCollection from "./scenario-collection/ScenarioCollection";

import "./leftpanel.scss";

class LeftPanel extends Component {
  render() {
    const regionalLevel = this.props.regionalLevel;
    const regionalLevelList = this.props.regionalLevelList;
    const regionList = this.props.regionList;
    const region = this.props.region;
    const regionalLevelData = this.props.handleRegionalLevelChange;
    const regionData = this.props.handleRegionChange;

    return (
      <div className="leftpanel-container">
        <h3 className="header-spacing-panels">Skenaarioiden valinta</h3>

        <div className="region-level">
          <RegionLevel
            regionalLevelList={regionalLevelList}
            regionalLevel={regionalLevel}
            regionalLevelData={regionalLevelData}
          />
        </div>

        <div className="region">
          <Region
            regionalLevel={regionalLevel}
            regionList={regionList}
            region={region}
            regionData={regionData}
          />
        </div>

        <div className="region-level">
          <ScenarioCollection />
        </div>

        <h4>Skenaariot</h4>
        <h4>Ajankohta</h4>
      </div>
    );
  }
}

export default LeftPanel;
