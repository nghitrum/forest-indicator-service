import React, { Component } from "react";

import RegionLevel from "./region-level/RegionLevel";
import Region from "./region/Region";
import ScenarioCollection from "./scenario-collection/ScenarioCollection";

import ForestData from "../../data/ForestData";

import "./leftpanel.scss";

class LeftPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regionalLevel: "",
      regionalLevelList: [],
      region: "",
      regionList: []
    };

    this.handleRegionalLevelChange = this.handleRegionalLevelChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
  }

  bindRegionalLevelData() {
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

  bindRegionData(regionalLevel) {
    let list = [];
    ForestData.getRegion(regionalLevel.value).then(function(result) {
      result.map(region => {
        list.push({
          value: region.id,
          label: region.name
        });
      });
    });
    return list;
  }

  handleRegionalLevelChange(regionalLevel) {
    this.setState({
      regionalLevel: regionalLevel,
      regionList: this.bindRegionData(regionalLevel),
      region: ""
    });
  }

  handleRegionChange(value) {
    this.setState({
      region: value
    });
  }

  render() {
    const regionalLevel = this.state.regionalLevel;
    const regionalLevelList = this.bindRegionalLevelData();
    const regionList = this.state.regionList;
    const region = this.state.region;

    return (
      <div className="leftpanel-container">
        <h3 className="header-spacing-panels">Skenaarioiden valinta</h3>

        <div className="region-level">
          <RegionLevel
            regionalLevelList={regionalLevelList}
            regionalLevel={regionalLevel}
            regionalLevelData={this.handleRegionalLevelChange}
          />
        </div>

        <div className="region">
          <Region
            regionalLevel={regionalLevel}
            regionList={regionList}
            region={region}
            regionData={this.handleRegionChange}
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
