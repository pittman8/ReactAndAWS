import React, { Component } from 'react';
import './App.css';

class RunLocal extends Component {
    copyGetStarted = () => {
        this.setState();
        const that = this;
        fetch('/script-pusher/copy-get-started')
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
                <button onClick={this.copyGetStarted}>
                    Copy the GetStarted Script
                </button>
            </div>
        );
    }
}

export default RunLocal;
