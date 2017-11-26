import React, { Component } from 'react'

import RegionLevel from './region-level/RegionLevel';
import Region from './region/Region';
import ScenarioCollection from './scenario-collection/ScenarioCollection';


import './leftpanel.scss';

class LeftPanel extends Component {

    constructor(props){

        super(props);

        this.state = {
        }
    }

    render () {
        return (
            <div className="leftpanel-container">
                <h3 className="header-spacing-panels">Skenaarioiden valinta</h3>

                <div className="region-level">
                    <RegionLevel />
                </div>

                <div className="region">
                    <Region />
                </div>

                <div className="region-level">
                    <ScenarioCollection />
                </div>

                <h4>Skenaariot</h4>
                <h4>Ajankohta</h4>
            </div>
        )
    }
}

export default LeftPanel