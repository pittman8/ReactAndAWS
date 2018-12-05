import React, { Component } from 'react';
import './App.css';
import CreateAssociate from './CreateAssociate';
import ElfHeader from './ElfHeader';
import RunLocal from './RunLocal';
import RunRemote from './RunRemote';
import Tools from './Tools';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            route: '',
            instanceData: {
                architecture: '',
                instanceId: '',
                keyName: '',
                hostName: ''
            },
            allocationId: '',
            region: ''
        };

        this.handler = this.handler.bind(this);
    }

    handler(json) {
        this.setState({
            result: json.result,
            route: json.route,
            instanceData: {
                architecture: json.instanceData.architecture,
                instanceId: json.instanceData.instanceId,
                keyName: json.instanceData.keyName,
                hostName: json.instanceData.hostName
            },
            allocationId: json.allocationId,
            region: json.region
        });
    }

    render() {
        return (
            <div className="App">
                <ElfHeader />
                <main>
                    <CreateAssociate handler={this.handler} />
                    <pre>Result: {this.state.result}</pre>
                    <pre>Route: {this.state.route}</pre>
                    <pre>
                        Architecture: {this.state.instanceData.architecture}
                    </pre>
                    <pre>InstanceId: {this.state.instanceData.instanceId}</pre>
                    <pre>AllocationId: {this.state.allocationId}</pre>
                    <pre>Region: {this.state.region}</pre>
                    <pre>Host Address: {this.state.instanceData.hostName}</pre>
                    <pre>KeyName: {this.state.instanceData.keyName}</pre>
                    <RunLocal handler={this.handler} />
                    <RunRemote handler={this.handler} />
                    <Tools handler={this.handler} />
                </main>
            </div>
        );
    }
}

export default App;
