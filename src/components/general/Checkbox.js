import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  toggleChange = value => {
    this.setState({
      isChecked: value.target.checked
    });

    this.props.selectedDataChange({
      dataType: this.props.dataType,
      name: value.target.name,
      id: value.target.value
    });
  };

  render() {
    const { id, name, description } = this.props;

    return (
      <div>
        <label>
          {description}
          <input
            value={id}
            name={name}
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />
        </label>
      </div>
    );
  }
}

export default Checkbox;
