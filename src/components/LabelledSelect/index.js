import React from 'react';
import PropTypes from 'prop-types';

const LabelledSelect = ({
    id = '',
    options = [],
    label = false,
    required = false,
    breakColumn = false,
    onChange,
    value = '',
}) => (<>
    {label && <label className='form-label' id={`${id}-select-label`} htmlFor={`${id}-select`}>{label}</label>}
    {(required)
        ? <select className='form-select' id={`${id}-select`} value={value} onChange={(event) => onChange(event)} required>{options}</select>
        : <select className='form-select' id={`${id}-select`} value={value} onChange={(event) => onChange(event)}>{options}</select>}
    {breakColumn && <div className='flex-break' />}
</>);

LabelledSelect.propTypes = {
    id: PropTypes.string,
    options: PropTypes.array,
    label: PropTypes.string,
    required: PropTypes.bool,
    breakColumn: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default LabelledSelect;
