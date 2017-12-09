import React, { Component } from "react";

import RegionLevel from "./region-level/RegionLevel";
import Region from "./region/Region";
import ScenarioCollection from "./scenario-collection/ScenarioCollection";
import Scenarios from "./scenarios/Scenarios";
import TimePeriods from "./time-periods/TimePeriods";

import "./leftpanel.scss";

class LeftPanel extends Component {
  render() {
    const regionalLevel = this.props.regionalLevel;
    const regionalLevelList = this.props.regionalLevelList;
    const regionalLevelData = this.props.handleRegionalLevelChange;

    const region = this.props.region;
    const regionList = this.props.regionList;
    const regionData = this.props.handleRegionChange;

    const scenarioCollection = this.props.scenarioCollection;
    const scenarioCollectionList = this.props.scenarioCollectionList;
    const scenarioCollectionData = this.props.handleScenarioCollectionChange;

    const scenarios = this.props.scenarios;
    const timePeriods = this.props.timePeriods;
    //  console.log(scenarios);
    //  const timePeriods = this.props.timePeriods;

    const selectedDataChange = this.props.handleSelectedDataChange;

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
            regionList={regionList}
            region={region}
            regionData={regionData}
          />
        </div>

        <div className="region-level">
          <ScenarioCollection
            scenarioCollectionList={scenarioCollectionList}
            scenarioCollection={scenarioCollection}
            scenarioCollectionData={scenarioCollectionData}
          />
        </div>

        <div className="scenarios">
          <Scenarios
            scenarios={scenarios}
            selectedDataChange={selectedDataChange}
          />
        </div>
        <div className="timeline">
          <TimePeriods
            timePeriods={timePeriods}
            selectedDataChange={selectedDataChange}
          />
        </div>
      </div>
    );
  }
}

export default LeftPanel;
