import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '.';
import BottomNavigation from '../../features/BottomNavigation';
import BackToTop from '../../features/BackToTop';
import ToggleFeatures from '../../features/ToggleFeatures';

Enzyme.configure({ adapter: new Adapter() });
let wrapper;

describe('Testing dashboard screen component', () => {
    beforeEach(() => {
        Object.defineProperty(global.window, 'scrollTo', { value: jest.fn() });
        Object.defineProperty(global.window, 'scrollY', { value: 500, writable: true });
        wrapper = shallow(<Dashboard />);
    });

    test('Should contain BottomNavigation, BackToTop and ToggleFeatures on load', () => {
        const bottomNavigation = wrapper.find(BottomNavigation);
        const backToTop = wrapper.find(BackToTop);
        const toggleFeatures = wrapper.find(ToggleFeatures);
        expect(bottomNavigation.exists()).toBe(true);
        expect(backToTop.exists()).toBe(true);
        expect(toggleFeatures.exists()).toBe(true);
    });

    test('Should handle user scroll for BackToTop', () => {
        wrapper.find('#dashboard-container').simulate('scroll');
        wrapper.update();
        console.log(wrapper.find(BackToTop).dive().debug());
        expect(wrapper.find(BackToTop).dive().exists()).toBe(true);
    });
});
