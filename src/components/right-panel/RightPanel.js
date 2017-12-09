import React, { Component } from 'react';
import Checkbox from "../general/Checkbox";

import './rightpanel.scss';

class RightPanel extends Component {
		render() {
		let indicatorCategories = this.props.indicatorCategories;


		const listItems = indicatorCategories.map((item, index) => (
			<div key={index}>
				<h4>{item.name}&nbsp;{item.isMandatory === 1 ? "*" : ""}</h4>


				{item.indicators.map(indicator => (
					<Checkbox
						key={indicator.id}
						id={indicator.id}
						description={indicator.name}
						name={indicator.name}
						dataType="indicator"
						selectedDataChange={this.props.handleSelectedDataChange}						
					/>
				))}
			</div>
		));

		return (
			<div className="panel-container">
				<h3 className="header-spacing-panels">Indikaattoreiden valinta</h3>
				{listItems}
			</div>
		)
	}
}

export default RightPanel