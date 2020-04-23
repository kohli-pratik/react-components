/* eslint-disable no-unused-vars */
import React, { useRef, createRef } from 'react';
import PropTypes from 'prop-types';
import DrawerToggleBtn from '../SideDrawer/components/DrawerToggleButton';
import logo from '../../styles/images/logo.png';
import MenuItem from './MenuItem';

const NavBar = ({ menuData, handleDrawerBtnClick }) => {
    const dropdownRef = useRef(menuData.map(() => createRef()));

    const handleDropdownMouseEnter = (event) => {
        const itemSelected = (event.target.id) ? event.target.id.split('-')[1] : event.target.parentElement.id.split('-')[1];
        const currentClassName = dropdownRef.current[itemSelected].current.className;
        if (currentClassName.includes(' hidden')) {
            dropdownRef.current[itemSelected].current.className = currentClassName.replace(' hidden', '');
        }
    };

    const handleDropdownMouseLeave = (event) => {
        const itemSelected = (event.target.id) ? event.target.id.split('-')[1] : event.target.parentElement.id.split('-')[1];
        const currentClassName = dropdownRef.current[itemSelected].current.className;
        if (!currentClassName.includes(' hidden')) {
            dropdownRef.current[itemSelected].current.className = currentClassName.concat(' hidden', '');
        }
    };

    const createMenuItemsHTML = () => {
        const menuItemsHTML = [];
        menuData.forEach(((data, idx) => {
            menuItemsHTML.push(<MenuItem key={idx}
                id={`menuItem-${idx}`}
                title={data.title}
                link={data.link}
                hasOptions={data.hasOptions}
                options={data.options}
                hasCategories={data.hasCategories}
                categoriesData={data.categoriesData}
                dropdownRef={dropdownRef.current[idx]}
                handleMouseEnter={(event) => handleDropdownMouseEnter(event)}
                handleMouseLeave={(event) => handleDropdownMouseLeave(event)} />);
        }));
        return menuItemsHTML;
    };

    return (
        <header className='navbar'>
            <nav className='navbar-navigation'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='spacer' />
                <div>
                    <DrawerToggleBtn handleToggleBtnClick={handleDrawerBtnClick} />
                </div>
                <ul className='items'>
                    {createMenuItemsHTML()}
                </ul>
            </nav>
        </header>
    );
};

NavBar.propTypes = {
    handleDrawerBtnClick: PropTypes.func,
    menuData: PropTypes.array,
};

export default NavBar;
