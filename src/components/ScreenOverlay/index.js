import React from 'react';
import PropTypes from 'prop-types';

const ScreenOverlay = (props) => <div className='screen-overlay' onClick={props.handleClick}></div>;

ScreenOverlay.propTypes = {
    handleClick: PropTypes.func,
};

export default ScreenOverlay;
