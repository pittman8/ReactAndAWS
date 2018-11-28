import React, { Component } from 'react';
import './App.css';
import ElfHeader from './ElfHeader';
import RadioLocal from './RadioLocal';
import RadioRemote from './RadioRemote';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: ''
        };
    }

    // Displays computer's info when "Run Foo" button is clicked
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

    render() {
        return (
            <div className="App">
                <ElfHeader />
                <main>
                    <RadioLocal />
                    <RadioRemote />
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>
                    <button onClick={this.copyCPUInfo}>Run Foo</button>
                </main>
            </div>
        );
    }
}

export default App;
