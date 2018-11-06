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
});
