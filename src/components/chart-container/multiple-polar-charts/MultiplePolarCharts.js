import React, { Component } from "react";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./multiple-polar-charts.scss";

import ReactHighcharts from "react-highcharts";
require("highcharts-more")(ReactHighcharts.Highcharts);

let config = {
  title: {
    text: ""
  },
  chart: {
    polar: true,
    backgroundColor: "transparent"
  },
  xAxis: {
    categories: []
  },
  series: [
    {
      data: []
    }
  ]
};

class MultiplePolarCharts extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.options);
  }

  //Still WIP, dont touch

  getScenarioEntries(options) {
    let configs = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i]["dataType"] === "scenario") {
        let chartConfig = new Object(config);
        chartConfig.title.text = "Scenario: " + options[i]["name"];
        console.log(chartConfig);
      }
    }
    return configs;
  }

  render() {
    const values = this.props.values;
    const options = this.props.options;

    let basicConfigs = this.getScenarioEntries(this.props.options);
    console.log(basicConfigs);

    return <div />;
  }
}

export default MultiplePolarCharts;
