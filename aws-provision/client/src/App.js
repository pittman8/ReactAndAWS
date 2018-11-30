import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'unknown',
            status: 'waiting'
        };
    }

    queryServer = () => {
        const that = this;
        fetch('/foo')
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

    createEducate = () => {
        //const that = this;
        fetch('/create-educate')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                //that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    createWithAwsStandardAccount = () => {};

    associateElasticIp = () => {};

    copyGetStarted = () => {};

    runGetStarted = () => {};

    removeKnownHost = () => {};

    render() {
        return (
            <div className="App">
                <header>
                    <h1>AWS Provision</h1>
                </header>
                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file}
                </p>
                <button onClick={this.queryServer}>Bar</button>
                <br /> <br />
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
