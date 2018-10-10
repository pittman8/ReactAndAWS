import React, {Component} from 'react';
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
        fetch('/index/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    getFile = () => {
        console.log('getFile called.');
        this.setState({file: 'url-file.js'})
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file}
                </p>
                <button onClick={this.queryServer}>Bar</button>
                <button id='getFile' onClick={this.getFile}>Get File</button>
            </div>
        );
    }
}

export default App;