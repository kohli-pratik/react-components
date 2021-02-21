import React from 'react';
import PropTypes from 'prop-types';

export const LabelledInputTypeText = 'text';
export const LabelledInputTypeTel = 'tel';
export const LabelledInputTypeEmail = 'email';
export const LabelledInputTypeSubmit = 'submit';

const LabelledInput = ({
    id,
    type,
    label,
    required,
    breakColumn,
    onChange,
    value,
}) => (<>
    {label && <label className='form-label' id={`${id}-input-label`} htmlFor={`${id}-input`}>{label}</label>}
    {(required)
        ? <input type={type} className='form-input' id={`${id}-input`} name={id} value={value} onChange={(event) => onChange(event)} required />
        : <input type={type} className='form-input' id={`${id}-input`} name={id} value={value} onChange={(event) => onChange(event)} />}
    {breakColumn && <div className='flex-break' />}
</>);

LabelledInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    breakColumn: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default LabelledInput;
