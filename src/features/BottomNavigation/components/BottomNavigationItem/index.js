import React from 'react';
import PropTypes from 'prop-types';

const BottomNavigationItem = ({
    id = '',
    icon,
    name = '',
    handleClick,
}) => (<div className='bottom-navigation-item'
    id={id}
    onClick={(event) => handleClick(event)}>
    <img src={icon} className='bottom-navigation-item-icon'></img>
    <p className='bottom-navigation-item-name'>{name}</p>
</div>);

BottomNavigationItem.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.object,
    name: PropTypes.string,
    handleClick: PropTypes.func,
};

export default BottomNavigationItem;
