import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: 'unknown'
        };
    }

    copyCPUInfo = () => {
        const that = this;
        fetch('/script-pusher/copy-file')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json.allData);
                that.setState({ allData: json.allData });
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    handleChange = event => {
        const selectedValue = event.target.value;
        console.log('HANDLE CHANGE', selectedValue);
        this.setState({
            ...this.state,
            selectedValue: selectedValue
        });
    };

    handleSubmit = event => {
        this.setState({
            allData: ''
        });
        console.log('A name was submitted: ', this.state);
        //if (this.state.selectedValue === 'cpu') {
        this.copyCPUInfo(this.state.selectedValue);
        // } else {
        //     this.copyVersionCheck(this.state.selectedValue);
        // }
        event.preventDefault();
    };

    render() {
        const radioWeb = (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="elf-form-field">
                        <input
                            type="radio"
                            name="app-choice"
                            value="CpuInfo"
                            id="elf-radio-cpu"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="elf-radio-cpu">CpuInfo</label>

                        <input
                            type="radio"
                            name="app-choice"
                            value="VersionCheck"
                            id="elf-radio-version"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="elf-radio-version">Version Info</label>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Run System Script
                        </button>
                    </div>
                </form>
            </div>
        );

        return (
            <div className="App">
                <header>
                    <h1>System Check</h1>
                </header>
                <main>
                    <section>{radioWeb}</section>
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>
                    <button onClick={this.copyCPUInfo}>Copy File</button>
                </main>
            </div>
        );
    }
}

export default App;
