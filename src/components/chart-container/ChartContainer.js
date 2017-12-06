import React, { Component } from 'react';

import Chart from './chart/Chart';
import ChartControls from './chart-controls/ChartControls';

import './chartcontainer.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ChartContainer extends Component {
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