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
        {options.map((option, idx) => (<>
            {(required)
                ? <input key={idx} type={type} className='form-radio-button' id={`${option.value}-radio-btn`} name={option.name}
                    value={option.value} onChange={(event) => onChange(event)} required />
                : <input key={idx} type={type} className='form-radio-button' id={`${option.value}-radio-btn`} name={option.name}
                    value={option.value} onChange={(event) => onChange(event)} />}
            <label key={`radio-btn-label-${idx}`} className='form-radio-button-label' id={`${option.value}-radio-btn-label`}
                htmlFor={`${option.value}-radio-btn`}>{option.label}</label></>
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
