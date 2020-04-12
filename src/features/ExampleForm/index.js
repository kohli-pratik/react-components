import React, { useState } from 'react';
import Form from '../../components/Form';
import LabelledInput, {
    LabelledInputTypeText,
    LabelledInputTypeEmail,
    LabelledInputTypeTel,
    LabelledInputTypeSubmit,
} from '../../components/LabelledInput';

const ExampleForm = () => {
    const [formData, setFormData] = useState({});
    const handleOnChange = (event) => {
        const attribute = event.target.id.split('-')[0];
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
                    <LabelledInput id='submit' type={LabelledInputTypeSubmit} value='Submit' />
                </Form>
            </main>
        </div>
    );
};

export default ExampleForm;
