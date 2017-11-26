import React, { Component } from 'react'

import Select from 'react-select';

import 'react-select/dist/react-select.css';

class RegionLevels extends Component {
    render () {
        return (
            <div>
                <h4>Aluetaso</h4>
                    <Select
                        name=""
                        className="max"
                        //value={}
                        //onChange={}
                        options={[
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                        ]}
                    />
            </div>
        )
    }
}

export default RegionLevels