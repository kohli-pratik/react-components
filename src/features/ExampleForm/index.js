import React, { useState } from 'react';
import Form from '../../components/Form';
import LabelledInput, {
    LabelledInputTypeText,
    LabelledInputTypeEmail,
    LabelledInputTypeTel,
    LabelledInputTypeSubmit,
} from '../../components/LabelledInput';
import LabelledSelect from '../../components/LabelledSelect';
import LabelledTextarea from '../../components/LabelledTextarea';
import LabelledRadioButton from '../../components/LabelledRadioButton';
import Constants from '../../utils/constants';

const ExampleForm = () => {
    const [formData, setFormData] = useState({});
    const handleOnChange = (event) => {
        const attribute = event.target.name;
        const { value } = event.target;
        setFormData({
            ...formData,
            [attribute]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitting form...');
    };

    const generateCountriesOptions = (key, value) => ((key > 0)
        ? <option key={key} value={value.toLowerCase()}>{value}</option>
        : <option key={key} value='' hidden disabled>Select Country</option>);

    return (
        <div className='form-container' id='example-form-container'>
            <header className='form-header'><h1>Example Form</h1></header>
            <main className='form-content'>
                <Form id='example-form' onSubmit={(event) => handleSubmit(event)}>
                    <LabelledInput id='firstName' type={LabelledInputTypeText} label={'First Name: '} value={formData.firstName}
                        onChange={(event) => handleOnChange(event)} required={true} />
                    <LabelledInput id='lastName' type={LabelledInputTypeText} label={'Last Name: '}
                        value={formData.lastName} onChange={(event) => handleOnChange(event)}
                        breakColumn={true} required={true} />
                    <LabelledInput id='email' type={LabelledInputTypeEmail} label={'Email: '} value={formData.email}
                        onChange={(event) => handleOnChange(event)} required={true} />
                    <LabelledInput id='telNumber' type={LabelledInputTypeTel} label={'Telephone Number: '}
                        value={formData.telNumber} onChange={(event) => handleOnChange(event)}
                        breakColumn={true} required={true} />
                    <LabelledSelect id='country' label={'Select Country: '}
                        value={formData.country} onChange={(event) => handleOnChange(event)}
                        options={Constants.testData.countries
                            .map((country, idx) => generateCountriesOptions(idx, country))}
                        required={true} />
                    <LabelledRadioButton id='gender' label={'Select Gender: '}
                        value={formData.gender} onChange={(event) => handleOnChange(event)}
                        options={Constants.testData.genders}
                        required={true} breakColumn={true} />
                    <LabelledTextarea id='message' label={'Message:'} currentCharCount={formData.message && formData.message.length}
                        maxCharCount={512} value={formData.message}
                        onChange={(event) => handleOnChange(event)}
                        required={true} breakColumn={true} />
                    <LabelledInput id='submit' type={LabelledInputTypeSubmit} value='Submit' />
                </Form>
            </main>
        </div>
    );
};

export default ExampleForm;
