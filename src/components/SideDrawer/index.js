import React from 'react';
import PropTypes from 'prop-types';

const SideDrawer = ({
    id,
    open = false,
    openDirection = 'left',
    children,
}) => {
    let className = `side-drawer ${openDirection}`;
    className = (open) ? className.concat(' open') : className.replace(' open', '');
    return (
        <aside className={className} id={id}>
            {children}
        </aside>
    );
};

SideDrawer.propTypes = {
    id: PropTypes.string,
    open: PropTypes.bool,
    openDirection: PropTypes.string,
    children: PropTypes.array,
};

export default SideDrawer;
