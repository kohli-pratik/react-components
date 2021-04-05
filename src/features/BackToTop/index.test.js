import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BackToTop from '.';

Enzyme.configure({ adapter: new Adapter() });
let wrapper;

describe('Testing Example Form feature', () => {
    beforeEach(() => {
        wrapper = mount(<BackToTop />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    test('Should contain button and icon', () => {
        expect(wrapper.find('button').props().className).toBe('backToTopBtn hidden');
        expect(wrapper.find('.backToTopBtn-icon').exists()).toBe(true);
    });

    test('Should trigger goToTop function when clicked', () => {
        window.scrollTo = jest.fn();
        wrapper.find('button').props().onClick();
        wrapper.update();
        expect(window.scrollTo).toHaveBeenCalledTimes(1);
    });
});
