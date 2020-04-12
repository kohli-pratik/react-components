import React from 'react';
import PropTypes from 'prop-types';

export const LabelledInputTypeText = 'text';
export const LabelledInputTypeTel = 'tel';
export const LabelledInputTypeEmail = 'email';
export const LabelledInputTypeSubmit = 'submit';

const LabelledInput = ({
    id = '',
    type = LabelledInputTypeText,
    label = false,
    required = false,
    breakColumn = false,
    onChange,
    value = '',
}) => (<>
    {label && <label className='form-label' id={`${id}-input-label`} htmlFor={`${id}-input`}>{label}</label>}
    {(required)
        ? <input type={type} className='form-input' id={`${id}-input`} name={id} value={value} onChange={(event) => onChange(event)} required />
        : <input type={type} className='form-input' id={`${id}-input`} name={id} value={value} onChange={(event) => onChange(event)} />}
    {breakColumn && <div className='flex-break' />}
</>);

LabelledInput.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    breakColumn: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default LabelledInput;
