import React, { Component } from 'react'

import './rightpanel.scss';

class RightPanel extends Component {
    render () {
        return (
            <div className="panel-container">
                <h3 className="header-spacing-panels">Indikaattoreiden valinta</h3>
                <h4>Puuntuotanto*</h4>
                <h4>Keruutuotteet</h4>
                <h4>Monimuotoisuus*</h4>
                <h4>Hiili</h4>
                <h4>Muut</h4>
            </div>
        )
    }
}

export default RightPanel