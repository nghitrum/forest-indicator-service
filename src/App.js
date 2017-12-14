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
    return new Promise((resolve, reject) => {
      ForestData.getRegionLevels().then(function(result) {
        resolve(result);
      });
    });
  }

  bindRegionData(regionalLevel) {
    if (regionalLevel !== "") {
      return new Promise((resolve, reject) => {
        ForestData.getRegion(regionalLevel.value).then(function(result) {
          resolve(result);
        });
      });
    }
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
    let regionList = [];
    this.bindRegionData(regionalLevel).then(result => {
      result.map(region => {
        regionList.push({
          value: region.id,
          label: region.name,
          ...region
        });
      });

      let scenarioCollectionList = this.bindScenarioCollectionsData(
        regionList[0]
      );

      this.bindChartData(scenarioCollectionList[0], regionList[0]).then(
        result => {
          this.setState({
            regionalLevel: regionalLevel,
            regionList: regionList,
            region: regionList[0],
            scenarioCollectionList: scenarioCollectionList,
            scenarioCollection: scenarioCollectionList[0],
            scenarios: result.scenarios,
            indicatorCategories: result.indicatorCategories,
            timePeriods: result.timePeriods,
            values: result.values
          });
        }
      );
    });
  }

  handleRegionChange(value) {
    if (value !== "") {
      let scenarioCollectionList = this.bindScenarioCollectionsData(value);

      this.bindChartData(scenarioCollectionList[0], value).then(result => {
        this.setState({
          region: value,
          scenarioCollection: scenarioCollectionList[0],
          scenarioCollectionList: scenarioCollectionList,

          scenarios: result.scenarios,
          timePeriods: result.timePeriods,
          indicatorCategories: result.indicatorCategories,
          values: result.values,
          selectedOptions: []
        });
      });
    }
  }

  handleScenarioCollectionChange(value) {
    this.bindChartData(value, this.state.region).then(result => {
      //  console.log(result.indicatorCategories);
      this.setState({
        scenarioCollection: value,
        scenarios: result.scenarios,
        indicatorCategories: result.indicatorCategories,
        timePeriods: result.timePeriods,
        values: result.values,
        selectedOptions: []
      });
    });
  }

  handleSelectedDataChange(value) {
    let check = true;
    if (value !== "") {
      //  only choose 1 option in time period, the function of time period is similar to radio box
      if (value.dataType === "timePeriod") {
        let newArr = this.state.selectedOptions.filter(function(element) {
          return element.dataType === "timePeriod";
        });

        if (newArr.length === 0) {
          this.state.selectedOptions.push(value);
        } else {
          let position = this.state.selectedOptions.findIndex(
            element =>
              element.dataType === newArr[0].dataType &&
              element.id === newArr[0].id
          );

          this.state.selectedOptions.splice(position, 1);
          this.state.selectedOptions.push(value);
        }
      } else {
        //  Only for scenarios and indicators
        let position = this.state.selectedOptions.findIndex(
          element =>
            element.dataType === value.dataType && element.id === value.id
        );

        // console.log(position);

        if (position === -1 || position === "undefined") {
          //  check for number of allowances
          let numOfScenarios = this.state.selectedOptions.filter(function(e) {
            return e.dataType === "scenario";
          }).length;

          let numOfIndicators = this.state.selectedOptions.filter(function(e) {
            return e.dataType === "indicator";
          }).length;

          if (numOfScenarios * (numOfIndicators + 1) <= 20) {
            this.state.selectedOptions.push(value);
          } else {
            check = false;
          }
        } else {
          //  Check for mandatory
          if (value.dataType === "indicator") {
            let indicatorSelected = this.state.selectedOptions.filter(function(
              element
            ) {
              return element.dataType === "indicator";
            });
            this.state.indicatorCategories.map(element => {
              if (element.isMandatory === 1) {
                let count = 0;
                element.indicators.map(indicator => {
                  indicatorSelected.map(s => {
                    if (s.id === indicator.id) {
                      count++;
                    }
                  });
                });

                if (count > 1) {
                  this.state.selectedOptions.splice(position, 1);
                  check = false;
                }
              }
            });
          } else {
            //  number of allowances of scenarios is 1 minimum
            let numOfScenarios = this.state.selectedOptions.filter(function(e) {
              return e.dataType === "scenario";
            }).length;
            //  console.log(numOfScenarios);
            if (numOfScenarios > 1) {
              this.state.selectedOptions.splice(position, 1);
              check = false;
            }
          }
        }
      }
    }
    console.log(this.state.selectedOptions);
    return check;
  }

  componentDidMount() {
    this.bindRegionalLevelData().then(result => {
      let regionalLevelList = [];
      result.map(element => {
        regionalLevelList.push({
          value: element.id,
          label: element.name,
          ...element
        });
      });

      let regionList = [];
      this.bindRegionData(regionalLevelList[0]).then(result => {
        result.map(region => {
          regionList.push({
            value: region.id,
            label: region.name,
            ...region
          });
        });

        let scenarioCollectionList = this.bindScenarioCollectionsData(
          regionList[0]
        );

        this.bindChartData(scenarioCollectionList[0], regionList[0]).then(
          result => {
            this.setState({
              regionalLevelList: regionalLevelList,
              regionalLevel: regionalLevelList[0],
              regionList: regionList,
              region: regionList[0],
              scenarioCollectionList: scenarioCollectionList,
              scenarioCollection: scenarioCollectionList[0],
              scenarios: result.scenarios,
              indicatorCategories: result.indicatorCategories,
              timePeriods: result.timePeriods,
              values: result.values
            });
          }
        );
      });
    });
  }

  render() {
    //  console.log(this.state.indicatorCategories);
    return (
      <div className="container-fluid App">
        <Header />

        <div className="col-lg-2">
          <LeftPanel
            regionalLevelList={this.state.regionalLevelList}
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
          <ChartContainer
            valueData={this.state.values}
            options={this.state.selectedOptions}
          />
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
