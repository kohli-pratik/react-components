import React from 'react';
import PropTypes from 'prop-types';

const LabelledTextarea = ({
    id,
    label,
    required,
    breakColumn,
    onChange,
    value,
    currentCharCount,
    maxCharCount,
}) => (<>
    {label && <label className='form-label' id={`${id}-textarea-label`} htmlFor={`${id}-textarea`}>{label}</label>}
    {(required)
        ? <textarea className='form-textarea' id={`${id}-textarea`} name={id} value={value} maxLength={maxCharCount} onChange={(event) => onChange(event)} required />
        : <textarea className='form-textarea' id={`${id}-textarea`} name={id} value={value} maxLength={maxCharCount} onChange={(event) => onChange(event)} />}
    <div id="char-count">
        <span id="current">{currentCharCount || 0}</span>
        <span id="maximum"> / {maxCharCount}</span>
    </div>
    {breakColumn && <div className='flex-break' />}
</>);

LabelledTextarea.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    breakColumn: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    currentCharCount: PropTypes.number.isRequired,
    maxCharCount: PropTypes.number.isRequired,
};

export default LabelledTextarea;
