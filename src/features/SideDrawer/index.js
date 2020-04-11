import React from 'react';
import PropTypes from 'prop-types';

const SideDrawer = (props) => {
    const drawerClassName = (props.show) ? 'side-drawer open' : 'side-drawer';
    return (
        <nav className={drawerClassName}>
            <ul>
                <li><a href='/'>Menu Item 1</a></li>
                <li><a href='/'>Menu Item 2</a></li>
            </ul>
        </nav>
    );
};

SideDrawer.propTypes = {
    show: PropTypes.bool,
};

export default SideDrawer;
