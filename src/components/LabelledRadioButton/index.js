import React from 'react';
import PropTypes from 'prop-types';

const LabelledRadioButton = ({
    id = '',
    type = 'radio',
    label = false,
    required = false,
    breakColumn = false,
    onChange,
    options = [],
}) => (<>
    {label && <label className='form-label' id={`${id}-radio-button-label`}>{label}</label>}
    <div className='form-radio-button-group'>
        {options.map((option, idx) => (<div key={idx} className='form-radio-button-container'>
            {(required)
                ? <input type={type} className='form-radio-button' id={`${option.value}-radio-btn`} name={option.name}
                    value={option.value} onChange={(event) => onChange(event)} required />
                : <input type={type} className='form-radio-button' id={`${option.value}-radio-btn`} name={option.name}
                    value={option.value} onChange={(event) => onChange(event)} />}
            <label className='form-radio-button-label' id={`${option.value}-radio-btn-label`}
                htmlFor={`${option.value}-radio-btn`}>{option.label}</label></div>
        ))}
    </div>
    {breakColumn && <div className='flex-break' />}
</>);

LabelledRadioButton.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    breakColumn: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.array,
};

export default LabelledRadioButton;
