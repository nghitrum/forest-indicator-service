import React, { Component } from 'react'

import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ReactHighcharts from 'react-highcharts';
require('highcharts-more')(ReactHighcharts.Highcharts);

const config = {
    chart: {
        defaultSeriesType: 'column',
        backgroundColor: 'transparent'
    },
    //TODO: Get categories from props and set them here
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr'],
    },
    yAxis: {
        min: 0,
        labels: {
            overflow: 'justify'
        }
    },

    //TODO: Get values from props and loop them to return data series
    series: [{
        name: "Maximum economic removal",
        data: [0.5, 0.2, 0.4]
    },
    {
        name: "Climate and energy policy",
        data: [0.9, 0.8, 0.7]
    },
    {
        name: "Lingonberry yield",
        data: [0.5, 0.2, 1.0]
    },
    {
        name: "Carbon sink",
        data: [0.2, 0.4, 0.9]
    },
    ]
};

class BarChart extends Component {
    render () {
        return (
            <div>
                <ReactHighcharts config = {config} />
            </div>
        )
    }
}

export default BarChart