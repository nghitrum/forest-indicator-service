import React, { Component } from 'react'

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './leftpanel.css';

class LeftPanel extends Component {

    state = {
        alueTaso: '',
        alue: '',
        skenaarioKokoelma: ''
    }

    alueTasoChanged = (selectedOption) => {
        this.setState({ alueTaso: selectedOption });
        if(selectedOption !== null){
            console.log(`Selected: ${selectedOption.label}`);
        }
    }

    alueChanged = (selectedOption) => {
        this.setState({ alue: selectedOption });
        if(selectedOption !== null){
            console.log(`Selected: ${selectedOption.label}`);
        }
    }

    skenaarioKokoelmaChanged = (selectedOption) => {
        this.setState({ skenaarioKokoelma: selectedOption });
        if(selectedOption !== null){
            console.log(`Selected: ${selectedOption.label}`);
        }
    }

    render () {
        return (
            <div className="leftpanel-container">
                <h3 className="header-spacing-panels">Skenaarioiden valinta</h3>
                <h4>Aluetaso</h4>
                    <Select
                        name=""
                        className="max"
                        value={this.state.alueTaso}
                        onChange={this.alueTasoChanged}
                        options={[
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                        ]}
                    />
                <h4>Alue</h4>
                    <Select
                        name=""
                        className="max"
                        value={this.state.alue}
                        onChange={this.alueChanged}
                        options={[
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                        ]}
                    />
                <h4>Skenaariokokoelma</h4>
                    <Select
                        name=""
                        className="max"
                        value={this.state.skenaarioKokoelma}
                        onChange={this.skenaarioKokoelmaChanged}
                        options={[
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                        ]}
                    />
                <h4>Skenaariot</h4>
                <h4>Ajankohta</h4>
            </div>
        )
    }
}

export default LeftPanel