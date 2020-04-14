import React from 'react';
import PropTypes from 'prop-types';
import DrawerToggleBtn from '../SideDrawer/components/DrawerToggleButton';
import logo from '../../styles/images/logo.png';

const NavBar = (props) => (
    <header className='navbar'>
        <nav className='navbar-navigation'>
            <div className='navbar-logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='spacer' />
            <div>
                <DrawerToggleBtn handleToggleBtnClick={props.handleDrawerBtnClick} />
            </div>
            <div className='navbar-navigation-items'>
                <ul>
                    <li>
                        <a href='/'>Menu Item 1</a>
                        <ul>
                            <li>Test</li>
                            <li>Test</li>
                        </ul>
                    </li>
                    <li>
                        <a href='/'>Menu Item 2</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

NavBar.propTypes = {
    handleDrawerBtnClick: PropTypes.func,
};

export default NavBar;
