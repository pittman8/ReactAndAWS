import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allData: 'unknown'
        };
    }

    callCpuInfo = () => {
        const that = this;
        fetch('/ssh-runner/call-cpu-info')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('JSON allData from server:', json.allData);
                that.setState({allData: json.allData});
            })
            .catch(function (ex) {
                console.log('parsing failed, error on server, URL bad, network down, or similar');
                console.log(JSON.stringify(ex, null, 4));
            });
    };
    render() {
        return (
            <div className="App">
                <header>
                    <header>
                        <h1>Run SSH</h1>
                        <p className="byline">by Hannah Pittman</p>
                    </header>
                    <main>
                        <button onClick={this.callCpuInfo}>Run CpuInfo</button>
                        <pre>{this.state.allData}</pre>
                    </main>
                    <footer>
                        <p>&copy; 2018 Hannah Pittman</p>
                    </footer>
                </header>
            </div>
        );
    }
}

export default App;
