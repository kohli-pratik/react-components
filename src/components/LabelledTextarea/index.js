import React from 'react';
import PropTypes from 'prop-types';

const LabelledTextarea = ({
    id = '',
    label = false,
    required = false,
    breakColumn = false,
    onChange,
    value = '',
    currentCharCount = 0,
    maxCharCount = 512,
}) => (<>
    {label && <label className='form-label' id={`${id}-textarea-label`} htmlFor={`${id}-textarea`}>{label}</label>}
    {(required)
        ? <textarea className='form-textarea' id={`${id}-textarea`} name={id} value={value} maxLength={maxCharCount} onChange={(event) => onChange(event)} required />
        : <textarea cclassName='form-textarea' id={`${id}-textarea`} name={id} value={value} maxLength={maxCharCount} onChange={(event) => onChange(event)} />}
    <div id="char-count">
        <span id="current">{currentCharCount}</span>
        <span id="maximum"> / {maxCharCount}</span>
    </div>
    {breakColumn && <div className='flex-break' />}
</>);


LabelledTextarea.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    breakColumn: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    currentCharCount: PropTypes.number,
    maxCharCount: PropTypes.number,
};

export default LabelledTextarea;
