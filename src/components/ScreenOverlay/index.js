import React from 'react';
import PropTypes from 'prop-types';

const ScreenOverlay = ({ handleClick }) => <div className='screen-overlay' onClick={handleClick}></div>;

ScreenOverlay.propTypes = {
    handleClick: PropTypes.func,
};

export default ScreenOverlay;
