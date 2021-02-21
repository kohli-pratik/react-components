import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LabelledInput from '../../components/LabelledInput';
import LabelledRadioButton from '../../components/LabelledRadioButton';
import LabelledSelect from '../../components/LabelledSelect';
import LabelledTextarea from '../../components/LabelledTextarea';
import ExampleForm from '.';
import Constants from '../../utils/constants';

Enzyme.configure({ adapter: new Adapter() });
let wrapper;

describe('Testing Example Form feature', () => {
    beforeEach(() => {
        wrapper = shallow(<ExampleForm />);
    });

    test('Should contain LabelledInput, LabelledRadioButton, LabelledSelect and LabelledTextarea components on load', () => {
        const labelledInput = wrapper.find(LabelledInput);
        const labelledRadioButton = wrapper.find(LabelledRadioButton);
        const labelledSelect = wrapper.find(LabelledSelect);
        const labelledTextarea = wrapper.find(LabelledTextarea);
        expect(labelledInput.exists()).toBe(true);
        expect(labelledRadioButton.exists()).toBe(true);
        expect(labelledSelect.exists()).toBe(true);
        expect(labelledTextarea.exists()).toBe(true);
    });

    test('Should contain LabelledInput for first name, last name, email and telephone', () => {
        expect(wrapper.find('#firstName').exists()).toBe(true);
        expect(wrapper.find('#lastName').exists()).toBe(true);
        expect(wrapper.find('#email').exists()).toBe(true);
        expect(wrapper.find('#telNumber').exists()).toBe(true);
    });

    test('Should capture values inputted by the user', () => {
        let onChangeEvent = {
            target: { name: 'firstName', value: 'Pratik' },
        };
        expect(wrapper.find('#firstName').dive().find('#firstName-input').props().value).toBe('');
        wrapper.find('#firstName').dive().find('#firstName-input').props()
            .onChange(onChangeEvent);
        expect(wrapper.find('#firstName').dive().find('#firstName-input').props().value).toBe('Pratik');

        onChangeEvent = {
            target: { name: 'lastName', value: 'Kohli' },
        };
        expect(wrapper.find('#lastName').dive().find('#lastName-input').props().value).toBe('');
        wrapper.find('#lastName').dive().find('#lastName-input').props()
            .onChange(onChangeEvent);
        expect(wrapper.find('#lastName').dive().find('#lastName-input').props().value).toBe('Kohli');

        onChangeEvent = {
            target: { name: 'email', value: 'pratik.kohli@test.com' },
        };
        expect(wrapper.find('#email').dive().find('#email-input').props().value).toBe('');
        wrapper.find('#email').dive().find('#email-input').props()
            .onChange(onChangeEvent);
        expect(wrapper.find('#email').dive().find('#email-input').props().value).toBe('pratik.kohli@test.com');


        onChangeEvent = {
            target: { name: 'telNumber', value: '07645326172' },
        };
        expect(wrapper.find('#telNumber').dive().find('#telNumber-input').props().value).toBe('');
        wrapper.find('#telNumber').dive().find('#telNumber-input').props()
            .onChange(onChangeEvent);
        expect(wrapper.find('#telNumber').dive().find('#telNumber-input').props().value).toBe('07645326172');
    });

    test('Should contain LabelledSelect for country and maritial status', () => {
        expect(wrapper.find('#country').exists()).toBe(true);
        expect(wrapper.find('#maritialStatus').exists()).toBe(true);
    });

    test('Should capture country value selected by the user', () => {
        const onChangeEvent = {
            target: { name: 'country', value: 'United Kingdom' },
        };
        expect(wrapper.find('#country').dive().find('#country-select').props().value).toBe('');
        wrapper.find('#country').dive().find('#country-select').props()
            .onChange(onChangeEvent);
        expect(wrapper.find('#country').dive().find('#country-select').props().value).toBe('United Kingdom');
    });

    test('Should capture maritial status value selected by the user', () => {
        const onChangeEvent = {
            target: { name: 'maritialStatus', value: 'Single' },
        };
        expect(wrapper.find('#maritialStatus').dive().find('#maritialStatus-select').props().value).toBe('');
        wrapper.find('#maritialStatus').dive().find('#maritialStatus-select').props()
            .onChange(onChangeEvent);
        expect(wrapper.find('#maritialStatus').dive().find('#maritialStatus-select').props().value).toBe('Single');
    });

    test('Should contain LabelledRadioButton for gender and preferred contact method', () => {
        expect(wrapper.find('#gender').exists()).toBe(true);
        Constants.testData.genders.forEach((gender) => {
            expect(wrapper.find('#gender').dive().find(`#${gender.value}-radio-btn`).exists()).toBe(true);
        });

        expect(wrapper.find('#contactMethod').exists()).toBe(true);
        Constants.testData.contactMethods.forEach((contactMethod) => {
            expect(wrapper.find('#contactMethod').dive().find(`#${contactMethod.value}-radio-btn`).exists()).toBe(true);
        });
    });

    test('Should capture gender options checked by the user', () => {
        let onChangeEvent = {
            target: { name: 'gender', value: 'male' },
        };
        expect(wrapper.find('#gender').props().value).toBe('');
        wrapper.find('#gender').dive().find('#gender-radio-button-group').find('.form-radio-button')
            .get(0)
            .props.onChange(onChangeEvent);
        expect(wrapper.find('#gender').props().value).toBe('male');

        onChangeEvent = {
            target: { name: 'gender', value: 'female' },
        };
        expect(wrapper.find('#gender').props().value).toBe('male');
        wrapper.find('#gender').dive().find('#gender-radio-button-group').find('.form-radio-button')
            .get(1)
            .props.onChange(onChangeEvent);
        expect(wrapper.find('#gender').props().value).toBe('female');

        onChangeEvent = {
            target: { name: 'gender', value: 'other' },
        };
        expect(wrapper.find('#gender').props().value).toBe('female');
        wrapper.find('#gender').dive().find('#gender-radio-button-group').find('.form-radio-button')
            .get(2)
            .props.onChange(onChangeEvent);
        expect(wrapper.find('#gender').props().value).toBe('other');
    });

    test('Should capture contact method options checked by the user', () => {
        let onChangeEvent = {
            target: { name: 'contactMethod', value: 'phone' },
        };
        expect(wrapper.find('#contactMethod').props().value).toBe('');
        wrapper.find('#contactMethod').dive().find('#contactMethod-radio-button-group').find('.form-radio-button')
            .get(0)
            .props.onChange(onChangeEvent);
        expect(wrapper.find('#contactMethod').props().value).toBe('phone');

        onChangeEvent = {
            target: { name: 'contactMethod', value: 'email' },
        };
        expect(wrapper.find('#contactMethod').props().value).toBe('phone');
        wrapper.find('#contactMethod').dive().find('#contactMethod-radio-button-group').find('.form-radio-button')
            .get(1)
            .props.onChange(onChangeEvent);
        expect(wrapper.find('#contactMethod').props().value).toBe('email');
    });

    test('Should contain LabelledTextarea for message and additional comments', () => {
        expect(wrapper.find('#message').exists()).toBe(true);
        expect(wrapper.find('#additionalComments').exists()).toBe(true);
    });

    test('Should capture message value inputted by the user', () => {
        const onChangeEvent = {
            target: { name: 'message', value: 'This is a test message...' },
        };
        expect(wrapper.find('#message').dive().find('#message-textarea').props().value).toBe('');
        wrapper.find('#message').dive().find('#message-textarea').props()
            .onChange(onChangeEvent);
        expect(wrapper.find('#message').dive().find('#message-textarea').props().value).toBe('This is a test message...');
    });

    test('Should capture additional comments value inputted by the user', () => {
        const onChangeEvent = {
            target: { name: 'additionalComments', value: 'This is a additional comment...' },
        };
        expect(wrapper.find('#additionalComments').dive().find('#additionalComments-textarea').props().value).toBe('');
        wrapper.find('#additionalComments').dive().find('#additionalComments-textarea').props()
            .onChange(onChangeEvent);
        expect(wrapper.find('#additionalComments').dive().find('#additionalComments-textarea').props().value).toBe('This is a additional comment...');
    });

    test('Should handle form submit when submit button clicked', () => {
        const onSubmitEvent = {
            preventDefault: jest.fn(),
        };
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        wrapper.find('#example-form').dive().simulate('submit', onSubmitEvent);
        expect(window.alert).toBeCalledTimes(1);
    });
});
