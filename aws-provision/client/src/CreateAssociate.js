import React, { Component } from 'react';
import './App.css';

class CreateAssociate extends Component {
    createEducate = () => {
        const that = this;
        fetch('/create-educate')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.props.handler(json);
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
                that.props.handler(json);
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
                <section>
                    <button onClick={this.createEducate}>
                        Create with AWS Educate Account
                    </button>
                    <button onClick={this.createWithAwsStandardAccount}>
                        Create with AWS Standard Account
                    </button>
                    <button onClick={this.associateElasticIp}>
                        Associate Elastic Ip
                    </button>
                </section>
            </div>
        );
    }
}

export default CreateAssociate;
