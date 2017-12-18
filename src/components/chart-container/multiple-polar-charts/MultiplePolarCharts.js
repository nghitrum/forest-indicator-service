import React, { Component } from "react";

import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./multiple-polar-charts.scss";

import ReactHighcharts from "react-highcharts";
require("highcharts-more")(ReactHighcharts.Highcharts);

const config = {
  chart: {
    polar: true,
    backgroundColor: "transparent"
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Oct",
      "Nov",
      "Dec",
      "Oct",
      "Nov",
      "Dec",
      "Oct",
      "Nov",
      "Dec",
      "Oct",
      "Nov",
      "Dec",
      "Oct",
      "Nov",
      "Dec"
    ]
  },
  series: [
    {
      data: [
        29.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4,
        194.1,
        95.6,
        54.4,
        194.1,
        95.6,
        54.4,
        194.1,
        95.6,
        54.4
      ]
    }
  ]
};

class MultiplePolarCharts extends Component {
  render() {
    return (
      <div>
        <div className="chart-wrapper">
          <ReactHighcharts config={config} />
        </div>
        <div className="chart-wrapper">
          <ReactHighcharts config={config} />
        </div>
        <div className="chart-wrapper">
          <ReactHighcharts config={config} />
        </div>
        <div className="chart-wrapper">
          <ReactHighcharts config={config} />
        </div>
        <div className="chart-wrapper">
          <ReactHighcharts config={config} />
        </div>
      </div>
    );
  }
}

export default MultiplePolarCharts;
