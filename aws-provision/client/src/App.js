import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: 'undefined',
            endpointCalled: 'unknown',
            file: 'unknown'
        };
    }

    createEducate = () => {
        const that = this;
        fetch('/create-educate')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(json);
            })
            .catch(function(ex) {
                console.log(
                    'CANNOT CREATE AN INSTANCE WHEN ON EC2 SYSTEMD SERVICE, ' +
                    'CAN CREATE INSTANCE ON LOCALHOST',
                    ex
                );
            });
    };

    createWithAwsStandardAccount = () => {
        const that = this;
        fetch('/create-standard')
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

    associateElasticIp = () => {
        const that = this;
        fetch('/associate-elastic-ip')
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

    copyGetStarted = () => {
        const that = this;
        fetch('/script-pusher/copy-get-started')
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

    runGetStarted = () => {
        const that = this;
        fetch('/script-pusher/run-get-started')
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

    removeKnownHost = () => {
        const that = this;
        fetch('/script-pusher/remove-known-host')
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
                <header>
                    <h1>AWS Provision</h1>
                </header>
                <p className="App-intro">
                    result: {this.state.result}
                    <br />
                    end-point: {this.state.endpointCalled}
                    <br />
                    file: {this.state.file}
                </p>
                <br />
                <button onClick={this.createEducate}>
                    Create with AWS Educate Account
                </button>
                <button onClick={this.createWithAwsStandardAccount}>
                    Create with AWS Standard Account
                </button>
                <button onClick={this.associateElasticIp}>
                    Associate Elastic Ip
                </button>
                <br /> <br />
                <button onClick={this.copyGetStarted}>
                    Copy the GetStarted Script
                </button>
                <button onClick={this.runGetStarted}>
                    Run the GetStarted Script
                </button>
                <button onClick={this.removeKnownHost}>
                    Remove From KnownHost
                </button>
            </div>
        );
    }
}

export default App;
