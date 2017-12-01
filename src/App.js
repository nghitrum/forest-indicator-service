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
      scenarioCollectionList: []
    };

    this.handleRegionalLevelChange = this.handleRegionalLevelChange.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleScenarioCollectionChange = this.handleScenarioCollectionChange.bind(
      this
    );
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

  handleRegionalLevelChange(regionalLevel) {
    this.setState({
      regionalLevel: regionalLevel,
      regionList: this.bindRegionData(regionalLevel),
      region: ""
    });

    this.handleRegionChange("");
  }

  handleRegionChange(value) {
    this.setState({
      region: value,
      scenarioCollection: "",
      scenarioCollectionList:
        value !== "" ? this.bindScenarioCollectionsData(value) : []
    });
  }

  handleScenarioCollectionChange(value) {
    this.setState({
      scenarioCollection: value
    });
  }

  render() {
    //  console.log("App.js", this.state);
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
          />
        </div>

        <div className="col-lg-8">
          <ChartContainer />
        </div>

        <div className="col-lg-2">
          <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
