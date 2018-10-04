import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import elfDebugEnzyme from './ElfDebugEnzyme';

configure({ adapter: new Adapter() });


describe('rest basic tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders initial value of paragraph with file unknown', () => {
        const wrapper = shallow(<App/>);
        const unknown = <p className="App-intro">file: unknown</p>;
        elfDebugEnzyme.getLast(wrapper, 'p', true);
        expect(wrapper.contains(unknown)).toEqual(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">file: url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        expect(wrapper.contains(nineSign)).toBe(true);
    });
});