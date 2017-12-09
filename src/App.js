import React, { Component } from "react";

import "./App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import RightPanel from "./components/right-panel/RightPanel";
import LeftPanel from "./components/left-panel/LeftPanel";
import ChartContainer from "./components/chart-container/ChartContainer";

import ForestData from "./data/ForestData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regionalLevel: "",
      regionalLevelList: [],
      region: "",
      regionList: [],

      scenarioCollection: "",
      scenarioCollectionList: [],
      scenarios: [],
      timePeriods: [],
      indicatorCategories: [],

      values: [],
      selectedOptions: []

    };

    this.handleRegionalLevelChange = this.handleRegionalLevelChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleScenarioCollectionChange = this.handleScenarioCollectionChange.bind(
      this
    );
    this.handleSelectedDataChange = this.handleSelectedDataChange.bind(this);
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
    if (regionalLevel !== "") {
      ForestData.getRegion(regionalLevel.value).then(function(result) {
        result.map(region => {
          list.push({
            value: region.id,
            label: region.name,
            ...region
          });
        });
      });
    }
    return list;
  }

  bindScenarioCollectionsData(region) {
    let list = [];
    region.scenarioCollections.map(element => {
      list.push({
        value: element.id,
        label: element.name,
        ...element
      });
    });
    return list;
  }

  bindChartData(scenarioCollection, region) {
    return new Promise((resolve, reject) => {
      if (region !== null && scenarioCollection !== null) {
        ForestData.getScenarionCollection(
          scenarioCollection.id,
          region.id
        ).then(function(result) {
          resolve(result[0]);
        });
      }
    });
  }

  handleRegionalLevelChange(regionalLevel) {
    this.setState({
      regionalLevel: regionalLevel,
      regionList: this.bindRegionData(regionalLevel),
      region: "",

      scenarioCollection: "",
      scenarioCollectionList: [],
      scenarios: [],
      timePeriods: [],
      indicatorCategories: [],
      values: []
    });

    this.handleRegionChange("");
  }

  handleRegionChange(value) {
    this.setState({
      region: value,
      scenarioCollection: "",
      scenarioCollectionList:
        value !== "" ? this.bindScenarioCollectionsData(value) : [],

      scenarios: [],
      timePeriods: [],
      indicatorCategories: [],
      values: []
    });
  }

  handleScenarioCollectionChange(value) {
    this.bindChartData(value, this.state.region).then(result => {
      this.setState({
        scenarioCollection: value,
        scenarios: result.scenarios,
        indicatorCategories: result.indicatorCategories,
        timePeriods: result.timePeriods,
        values: result.values
      });
    });
  }

  handleSelectedDataChange(value) {
    if (value !== "") {
      let position = this.state.selectedOptions.findIndex(
        element =>
          element.dataType === value.dataType && element.id === value.id
      );
      //console.log("Position", position);
      if (position === -1) {
        //console.log(true);
        this.state.selectedOptions.push(value);
      } else {
        //console.log(false);
        this.state.selectedOptions.splice(position, 1);
      }
    }

    console.log(this.state.selectedOptions);
  }

  render() {
    //  console.log("App.js", this.state.selectedData);

    //  console.log("App.js", this.state.timePeriods);
    return (
      <div className="container-fluid App">
        <Header />

        <div className="col-lg-2">
          <LeftPanel
            regionalLevelList={this.bindRegionalLevelData()}
            regionalLevel={this.state.regionalLevel}
            handleRegionalLevelChange={this.handleRegionalLevelChange}
            region={this.state.region}
            regionList={this.state.regionList}
            handleRegionChange={this.handleRegionChange}
            scenarioCollection={this.state.scenarioCollection}
            scenarioCollectionList={this.state.scenarioCollectionList}
            handleScenarioCollectionChange={this.handleScenarioCollectionChange}
            scenarios={this.state.scenarios}
            timePeriods={this.state.timePeriods}
            handleSelectedDataChange={this.handleSelectedDataChange}
          />
        </div>

        <div className="col-lg-8">
          <ChartContainer />
        </div>

        <div className="col-lg-2">
          <RightPanel
            indicatorCategories={this.state.indicatorCategories}
            handleSelectedDataChange={this.handleSelectedDataChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
