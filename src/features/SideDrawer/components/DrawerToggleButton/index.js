import React from 'react';
import PropTypes from 'prop-types';

const DrawerToggleButton = (props) => (
    <button className='toggle-btn' aria-label='open-menu-drawer'
        onClick={props.handleToggleBtnClick}>
        <div className='toggle-btn-line' />
        <div className='toggle-btn-line' />
        <div className='toggle-btn-line' />
    </button>
);

DrawerToggleButton.propTypes = {
    handleToggleBtnClick: PropTypes.func,
};

export default DrawerToggleButton;
