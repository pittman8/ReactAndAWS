import React, { Component } from 'react';
import './App.css';

const instanceId = "i-06272fc145fe42ddc";
const ec2Ip = "18.235.68.201";

class Tools extends Component {
    getInstanceStatus = () => {
        const that = this;
        fetch('/get-instance-status?instanceId=' + instanceId)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.props.handler(json);
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
                that.props.handler(json);
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
        fetch('/script-pusher/remove-known-host?ec2Ip=' + ec2Ip)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.props.handler(json);
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
                <button onClick={this.rebootInstance}>Reboot Instance</button>
            </div>
        );
    }
}

export default Tools;
