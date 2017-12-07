import React, { Component } from 'react';
import Checkbox from "../general/Checkbox";


import './rightpanel.scss';

class RightPanel extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let indicatorCategories = this.props.indicatorCategories;
		const listItems = indicatorCategories.map(item => (
			<div>
				<h4>{item.name}</h4>
				{item.indicators.map(indicator => (
					<Checkbox
						key={indicator.id}
						id={indicator.id}
						description={indicator.name}
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