import React, { Component } from "react";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ReactHighcharts from "react-highcharts";
require("highcharts-more")(ReactHighcharts.Highcharts);
require("highcharts-exporting")(ReactHighcharts.Highcharts);

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupBy: "indicator",
      groupByLabel: "Group by Scenarios"
    };

    this.toggleGroupBy = this.toggleGroupBy.bind(this);
  }

  toggleGroupBy() {
    if (this.state.groupBy === "indicator") {
      this.setState({
        groupBy: "scenario",
        groupByLabel: "Group by Indicators"
      });
    } else {
      this.setState({
        groupBy: "indicator",
        groupByLabel: "Group by Scenarios"
      });
    }
  }

  render() {
    const values = this.props.values;
    const options = this.props.options;

    let timePeriod = options.filter(function(e) {
      return e.dataType === "timePeriod";
    })[0];

    let validData = values.filter(function(e) {
      return e.timePeriodId.toString() === timePeriod.id.toString();
    });

    let scenariosSelectedList = options.filter(function(e) {
      return e.dataType === "scenario";
    });

    let indicatorsSelectedList = options.filter(function(e) {
      return e.dataType === "indicator";
    });

    let myConfig;

    // console.log("new");
    if (this.state.groupBy === "scenario") {
      let xCategories = [];
      let ySeries = [];

      scenariosSelectedList.forEach(scenario => {
        let scenarioId = scenario.id;
        xCategories.push(scenario.name);
        indicatorsSelectedList.forEach(indicator => {
          // console.log(indicatorName);
          let data = validData.filter(function(e) {
            return (
              e.scenarioId.toString() === scenarioId.toString() &&
              e.indicatorId.toString() === indicator.id.toString()
            );
          });
          let seriesData = [];
          data.forEach(d => {
            seriesData.push(d.value);
          });

          //  search indicator name first
          let position = ySeries.findIndex(
            element =>
              element.name === indicator.name && element.id === indicator.id
          );

          if (position === -1 || position === "undefined") {
            ySeries.push({
              name: indicator.name,
              data: seriesData,
              id: indicator.id
            });
          } else {
            ySeries[position].data.push(seriesData);
          }
        });
      });

      myConfig = {
        title: {
          text: this.props.region.name + " " + timePeriod.name
        },
        chart: {
          defaultSeriesType: "column",
          backgroundColor: "transparent"
        },
        xAxis: {
          categories: xCategories,
          crosshair: true
        },
        yAxis: {
          min: 0,
          labels: {
            overflow: "justify"
          }
        },
        series: ySeries
      };
    } else {
      let xCategories = [];
      let ySeries = [];

      indicatorsSelectedList.forEach(indicator => {
        let indicatorId = indicator.id;
        xCategories.push(indicator.name);
        scenariosSelectedList.forEach(scenario => {
          // console.log(scenario);
          let data = validData.filter(function(e) {
            return (
              e.indicatorId.toString() === indicatorId.toString() &&
              e.scenarioId.toString() === scenario.id.toString()
            );
          });
          let seriesData = [];
          data.forEach(d => {
            seriesData.push(d.value);
          });

          //  search indicator name first
          let position = ySeries.findIndex(
            element =>
              element.name === scenario.name && element.id === scenario.id
          );

          if (position === -1 || position === "undefined") {
            ySeries.push({
              name: scenario.name,
              data: seriesData,
              id: scenario.id
            });
          } else {
            ySeries[position].data.push(seriesData);
          }
        });
      });
      myConfig = {
        title: {
          text: this.props.region.name + " " + timePeriod.name
        },
        chart: {
          defaultSeriesType: "column",
          backgroundColor: "transparent"
        },
        xAxis: {
          categories: xCategories,
          crosshair: true
        },
        yAxis: {
          min: 0,
          labels: {
            overflow: "justify"
          }
        },
        series: ySeries
      };
    }

    return (
      <div>
        <ReactHighcharts config={myConfig} />
        <button onClick={this.toggleGroupBy}>{this.state.groupByLabel}</button>
      </div>
    );
  }
}

export default BarChart;
