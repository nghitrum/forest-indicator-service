import React, { Component } from 'react'

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './chart-controls.scss';

class ChartControls extends Component {
    render () {
        return (
            <div>
                <div className="chart-control-buttons col-lg-7">
                    <button className="btn">Polar chart (Single)</button>
                    <button className="btn">Polar chart (Many)</button>
                    <button className="btn">Bar chart</button>
                    <button className="btn">Table chart</button>
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