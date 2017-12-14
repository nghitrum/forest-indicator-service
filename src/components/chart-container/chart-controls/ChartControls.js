import React, { Component } from 'react'

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './chart-controls.scss';

class ChartControls extends Component {

    changeChartType = e => {
        switch(e.target.value){
            case "singlepolar":
                this.props.changeChartType(e.target.value);
                break;
            case "manypolar":
                this.props.changeChartType(e.target.value);
                break;
            case "bar":
                this.props.changeChartType(e.target.value);
                break;
            case "table":
                this.props.changeChartType(e.target.value);
                break;
            default:
                this.props.changeChartType("singlepolar");
                break;
        }
    }

    render () {
        return (
            <div>
                <div className="chart-control-buttons col-lg-7">
                    <button className="btn" value="singlepolar" onClick={this.changeChartType}>Polar chart (Single)</button>
                    <button className="btn" value="manypolar" onClick={this.changeChartType}>Polar chart (Many)</button>
                    <button className="btn" value="bar" onClick={this.changeChartType}>Bar chart</button>
                    <button className="btn" value="table" onClick={this.changeChartType}>Table chart</button>
                </div>
                <div className="chart-export-buttons col-lg-3">
                    <button className="btn">Download chart</button>
                    <button className="btn">Print chart</button>
                </div>
            </div>
        )
    }
}

export default ChartControls