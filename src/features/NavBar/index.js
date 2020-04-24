/* eslint-disable no-unused-vars */
import React, { useRef, createRef, useState } from 'react';
import PropTypes from 'prop-types';
import DrawerToggleBtn from '../SideDrawer/components/DrawerToggleButton';
import logo from '../../styles/images/logo.png';
import MenuItem from './MenuItem';

const NavBar = ({ menuData, handleDrawerBtnClick }) => {
    const [dropdownHeight, setDropdownHeight] = useState('0px');
    const dropdownRef = useRef(menuData.map(() => createRef()));

    const handleDropdownMouseEnter = (elementId) => {
        const itemSelected = elementId.split('-')[1];
        const currentClassName = dropdownRef.current[itemSelected].current.className;
        if (currentClassName.includes(' hidden')) {
            dropdownRef.current[itemSelected].current.className = currentClassName.replace(' hidden', '');
            setDropdownHeight(`${dropdownRef.current[itemSelected].current.scrollHeight}px`);
        }
    };

    const handleDropdownMouseLeave = (elementId) => {
        const itemSelected = elementId.split('-')[1];
        const currentClassName = dropdownRef.current[itemSelected].current.className;
        if (!currentClassName.includes(' hidden')) {
            dropdownRef.current[itemSelected].current.className = currentClassName.concat(' hidden', '');
            setDropdownHeight('0px');
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
                dropdownHeight={dropdownHeight}
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
