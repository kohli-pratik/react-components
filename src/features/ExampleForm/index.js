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

    const generateSelectDropdownOptions = (key, value, subject) => ((key > 0)
        ? <option key={key} value={value.toLowerCase()}>{value}</option>
        : <option key={key} value='' hidden disabled>{`Select ${subject}`}</option>);

    return (
        <div className='form-container' id='example-form-container'>
            <header className='form-header'><p className='form-header-title'>Example Form</p></header>
            <main className='form-content'>
                <Form id='example-form' onSubmit={(event) => handleSubmit(event)}>
                    <LabelledInput id='firstName' type={LabelledInputTypeText} label={'First Name: '} value={formData.firstName || ''}
                        onChange={(event) => handleOnChange(event)} required={true} />
                    <LabelledInput id='lastName' type={LabelledInputTypeText} label={'Last Name: '}
                        value={formData.lastName || ''} onChange={(event) => handleOnChange(event)}
                        breakColumn={true} required={true} />
                    <LabelledInput id='email' type={LabelledInputTypeEmail} label={'Email: '} value={formData.email || ''}
                        onChange={(event) => handleOnChange(event)} required={true} />
                    <LabelledInput id='telNumber' type={LabelledInputTypeTel} label={'Telephone Number: '}
                        value={formData.telNumber || ''} onChange={(event) => handleOnChange(event)}
                        breakColumn={true} required={false} />
                    <LabelledSelect id='country' label={'Select Country: '}
                        value={formData.country || ''} onChange={(event) => handleOnChange(event)}
                        options={Constants.testData.countries
                            .map((country, idx) => generateSelectDropdownOptions(idx, country, 'Country'))}
                        required={true} />
                    <LabelledRadioButton id='gender' label={'Select Gender: '}
                        value={formData.gender || ''} onChange={(event) => handleOnChange(event)}
                        options={Constants.testData.genders}
                        required={true} breakColumn={true} />
                    <LabelledTextarea id='message' label={'Message:'} currentCharCount={formData.message ? formData.message.length : 0}
                        maxCharCount={512} value={formData.message || ''}
                        onChange={(event) => handleOnChange(event)}
                        required={true} breakColumn={true} />
                    <LabelledRadioButton id='contactMethod' label={'Select Preferred Contact Method: '}
                        value={formData.contactMethod || ''} onChange={(event) => handleOnChange(event)}
                        options={Constants.testData.contactMethods}
                        required={false} breakColumn={false} />
                    <LabelledSelect id='maritialStatus' label={'Select Maritial Status: '}
                        value={formData.maritialStatus || ''} onChange={(event) => handleOnChange(event)}
                        options={Constants.testData.maritialStatus
                            .map((country, idx) => generateSelectDropdownOptions(idx, country, 'Maritial Status'))}
                        required={false} breakColumn={true} />
                    <LabelledTextarea id='additionalComments' label={'Additional Comments:'} currentCharCount={formData.additionalComments ? formData.additionalComments.length : 0}
                        maxCharCount={150} value={formData.additionalComments || ''}
                        onChange={(event) => handleOnChange(event)}
                        required={false} breakColumn={true} />
                    <LabelledInput id='submit' type={LabelledInputTypeSubmit} label={''} required={false} onChange={() => null} value='Submit' />
                </Form>
            </main>
        </div>
    );
};

export default ExampleForm;
