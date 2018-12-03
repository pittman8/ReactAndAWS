import React, { Component } from 'react';
import './App.css';
import CreateAssociate from './CreateAssociate';
import ElfHeader from './ElfHeader';
import RunLocal from './RunLocal';
import RunRemote from './RunRemote';
import Tools from "./Tools";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            route: '',
            instanceData: {
                architecture: '',
                instanceId: '',
                keyName: ''
            }
        };
    }

    render() {
        return (
            <div className="App">
                <ElfHeader />
                <main>
                    <CreateAssociate />
                        <pre>Result: {this.props.result}</pre>
                        <pre>Route: {this.props.route}</pre>
                        <pre>Architecture: {this.state.instanceData.architecture}</pre>
                        <pre>InstanceId: {this.state.instanceData.instanceId}</pre>
                        <pre>KeyName: {this.state.instanceData.keyName}</pre>
                    <RunLocal />
                    <RunRemote />
                    <Tools />
                </main>
            </div>
        );
    }
}

export default App;