import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = ({ handleToggleBtnClick }) => (
    <button className='mobile-menu-toggle-btn' aria-label='open-mobil-menu'
        onClick={handleToggleBtnClick}>
        <div className='toggle-btn-line' />
        <div className='toggle-btn-line' />
        <div className='toggle-btn-line' />
    </button>
);

ToggleButton.propTypes = {
    handleToggleBtnClick: PropTypes.func,
};

export default ToggleButton;
