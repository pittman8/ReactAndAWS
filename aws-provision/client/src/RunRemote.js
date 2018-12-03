import React, { Component } from 'react';
import './App.css';

class RunRemote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 'undefined',
            route: 'unknown',
        };
    }

    runGetStarted = () => {
        const that = this;
        fetch('/ssh-runner/run-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    runUbuntuSetup = () => {
        const that = this;
        fetch('/ssh-runner/run-ubuntu-setup')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    <br />
                    <button onClick={this.runGetStarted}>
                        Run the GetStarted Script on EC2
                    </button>
                    <button onClick={this.runUbuntuSetup}>
                        Run the UbuntuSetup Script on EC2
                    </button>
                </p>
            </div>
        );
    }
}

export default RunRemote;
