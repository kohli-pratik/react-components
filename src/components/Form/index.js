import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ id, onSubmit, children }) => (
    <form className='form' id={id} onSubmit={(event) => onSubmit(event)}>
        {children}
    </form>
);

Form.propTypes = {
    id: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.array,
};

export default Form;
