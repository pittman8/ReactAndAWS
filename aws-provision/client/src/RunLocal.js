import React, { Component } from 'react';
import './App.css';

class RunLocal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            route: '',
        };
    }

    copyGetStarted = () => {
        const that = this;
        fetch('/script-pusher/copy-get-started')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('result', json.result);
                console.log('route', json.route);
                that.setState({ result: json.result, route: json.route });
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
