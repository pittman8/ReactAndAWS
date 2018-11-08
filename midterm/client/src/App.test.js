import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfHeader from './ElfHeader';
import elfDebugEnzyme from './ElfDebugEnzyme';

configure({ adapter: new Adapter() });

describe('basic suite', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders h1 header', () => {
        const wrapper = shallow(<App />);
        const unknown = <ElfHeader />;
        expect(wrapper.contains(unknown)).toEqual(true);
        elfDebugEnzyme.getLast(wrapper, 'ElfHeader', true);
        console.log('TESTER', wrapper.find('ElfHeader').debug());
    });

    it('contains end paragraph', () => {
        const wrapper = shallow(<App />);
        const unknown = (
            <p>
                Completed by Hannah Pittman
                <br />
                ISIT 320 Fall 2018 Charlie Calvert
            </p>
        );
        expect(wrapper.contains(unknown)).toEqual(true);
        elfDebugEnzyme.getLast(wrapper, 'p', true);
        console.log('TESTER', wrapper.find('p').debug());
    });

    it('contains label for CpuInfo', () => {
        const wrapper = shallow(<App />);
        const unknown = <label htmlFor="elf-radio-cpu">CpuInfo</label>;
        expect(wrapper.contains(unknown)).toEqual(true);
    });

    it('contains label for VersionCheck', () => {
        const wrapper = shallow(<App />);
        const unknown = <label htmlFor="elf-radio-version">Version Info</label>;
        expect(wrapper.contains(unknown)).toEqual(true);
    });

    it('contains label for Uptime web', () => {
        const wrapper = shallow(<App />);
        const unknown = <label htmlFor="elf-uptime-web">Uptime</label>;
        expect(wrapper.contains(unknown)).toEqual(true);
    });

    it('contains label for Uptime remote', () => {
        const wrapper = shallow(<App />);
        const unknown = <label htmlFor="elf-uptime-remote">Uptime</label>;
        expect(wrapper.contains(unknown)).toEqual(true);
    });
});
