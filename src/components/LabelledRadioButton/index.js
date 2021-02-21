import React from 'react';
import PropTypes from 'prop-types';

const LabelledRadioButton = ({
    id,
    label,
    required,
    breakColumn,
    onChange,
    options,
}) => (<>
    {label && <label className='form-label' id={`${id}-radio-button-label`}>{label}</label>}
    <div className='form-radio-button-group' id={`${id}-radio-button-group`}>
        {options.map((option, idx) => (<div key={idx} className='form-radio-button-container'>
            {(required)
                ? <input type='radio' className='form-radio-button' id={`${option.value}-radio-btn`} name={option.name}
                    value={option.value} onChange={(event) => onChange(event)} required />
                : <input type='radio' className='form-radio-button' id={`${option.value}-radio-btn`} name={option.name}
                    value={option.value} onChange={(event) => onChange(event)} />}
            <label className='form-radio-button-label' id={`${option.value}-radio-btn-label`}
                htmlFor={`${option.value}-radio-btn`}>{option.label}</label></div>
        ))}
    </div>
    {breakColumn && <div className='flex-break' />}
</>);

LabelledRadioButton.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    breakColumn: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};

export default LabelledRadioButton;
