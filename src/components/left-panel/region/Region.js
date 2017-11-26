import React, { Component } from 'react'

import Select from 'react-select';

import 'react-select/dist/react-select.css';

class Region extends Component {
    render () {
        return (
            <div>
                <h4>Alue</h4>
                <Select
                    name=""
                    className=""
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

export default Region