import React, { Component } from 'react';

import Chart from './chart/Chart';
import MultiplePolarCharts from './multiple-polar-charts/MultiplePolarCharts';
import BarChart from './barchart/BarChart';
import TableChart from './table-chart/TableChart';
import ChartControls from './chart-controls/ChartControls';

import './chartcontainer.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ChartContainer extends Component {

    constructor(props){
        super(props);
        this.setScenarioId = this.setScenarioId.bind(this);

        this.state = {
            chartType: "singlepolar"
          };

          this.changeChartType = this.changeChartType.bind(this);
          this.RenderChart = this.RenderChart.bind(this);
    }

    setScenarioId(){
        console.log(this.props.options)
    }

    changeChartType(type) {
        this.setState({
          chartType: type
        });
    }

    RenderChart(chartType){
        switch(chartType){
            case "singlepolar":
                return <Chart />
            case "manypolar":
                return <MultiplePolarCharts />
            case "bar":
                return <BarChart />
            case "table":
                return <TableChart />
            default:
                return <Chart />
        }
    }
    
    render () {

        return (
            <div className="chart-container">
                <div className="chart-content">
                    {this.RenderChart(this.state.chartType)}
                </div>
                <div className="chart-controls container">
                    <ChartControls
                        changeChartType={this.changeChartType} />
                </div>
            </div>
        )
    }
}

export default ChartContainer