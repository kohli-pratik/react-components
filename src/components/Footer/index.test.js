import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '.';
import Constants from '../../utils/constants';

Enzyme.configure({ adapter: new Adapter() });
let wrapper;

describe('Testing Footer component', () => {
    beforeEach(() => {
        wrapper = shallow(<Footer footerText={Constants.strings.footerText} />);
    });

    test('Should contain footer text', () => {
        Object.keys(Constants.strings.footerText).forEach((key) => {
            expect(wrapper.text().includes(Constants.strings.footerText[key]))
                .toBe(true);
        });
    });
});
