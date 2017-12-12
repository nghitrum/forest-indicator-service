import React, { Component } from 'react'

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ReactHighcharts from 'react-highcharts';
require('highcharts-more')(ReactHighcharts.Highcharts);

const config = {
    chart: {
        polar: true
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Oct', 'Nov', 'Dec', 'Oct', 'Nov', 'Dec', 'Oct', 'Nov', 'Dec', 'Oct', 'Nov', 'Dec', 'Oct', 'Nov', 'Dec']
    },
    legend: {
        layout: 'horizontal',
        floating: true,
        backgroundColor: '#FFFFFF',
        align: 'right',
        verticalAlign: 'top',
        y: 60,
        x: -60
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 194.1, 95.6, 54.4, 194.1, 95.6, 54.4, 194.1, 95.6, 54.4]
    }]
};

class MultiplePolarCharts extends Component {
    render () {
        return (
            <div>
                <ReactHighcharts config = {config} />
                <ReactHighcharts config = {config} />
            </div>
        )
    }
}

export default MultiplePolarCharts