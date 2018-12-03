import React, { Component } from 'react';
import './App.css';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getInstanceStatus = () => {
        const that = this;
        fetch('/get-instance-status')
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

    rebootInstance = () => {
        const that = this;
        fetch('/reboot-instance')
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
                <button onClick={this.removeKnownHost}>
                    Remove From KnownHost
                </button>
                <button onClick={this.getInstanceStatus}>
                    Get Instance Status
                </button>
                <button onClick={this.rebootInstance}>
                    Reboot Instance
                </button>
            </div>
        );
    }
}

export default Tools;
