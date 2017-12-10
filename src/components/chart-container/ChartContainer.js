import React, { Component } from 'react';

import Chart from './chart/Chart';
import ChartControls from './chart-controls/ChartControls';

import './chartcontainer.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ChartContainer extends Component {

    constructor(props){
        super(props);
        this.setScenarioId();
    }

    setScenarioId(){
        console.log(this.props.options)
    }

    render () {
        return (
            <div className="chart-container">
                <div className="chart-content">
                    <Chart />
                </div>
                <div className="chart-controls container">
                    <ChartControls />
                </div>
            </div>
        )
    }
}

export default ChartContainer