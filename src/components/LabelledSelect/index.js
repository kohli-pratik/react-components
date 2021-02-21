import React from 'react';
import PropTypes from 'prop-types';

const LabelledSelect = ({
    id,
    options,
    label,
    required,
    breakColumn,
    onChange,
    value,
}) => (<>
    {label && <label className='form-label' id={`${id}-select-label`} htmlFor={`${id}-select`}>{label}</label>}
    {(required)
        ? <select className='form-select' id={`${id}-select`} name={id} value={value} onChange={(event) => onChange(event)} required>{options}</select>
        : <select className='form-select' id={`${id}-select`} name={id} value={value} onChange={(event) => onChange(event)}>{options}</select>}
    {breakColumn && <div className='flex-break' />}
</>);

LabelledSelect.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    breakColumn: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default LabelledSelect;
