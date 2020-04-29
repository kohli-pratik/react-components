import React, { useRef, createRef, useState } from 'react';
import PropTypes from 'prop-types';
import BurgerMenuToggleBtn from '../BurgerMenu/components/ToggleButton';
import logo from '../../styles/images/logo.png';
import MenuItem from './MenuItem';
import ScreenOverlay from '../../components/ScreenOverlay';

const NavBar = ({ menuData, handleBurgerMenuBtnClick }) => {
    const [dropdownData, setDropdownData] = useState({});
    const [showOverlay, setShowOverlay] = useState(false);
    const dropdownRef = useRef(menuData.map(() => createRef()));

    const handleDropdownMouseEnter = (elementId) => {
        const itemSelected = elementId.split('-')[1];
        const currentClassName = dropdownRef.current[itemSelected].current.className;
        if (currentClassName.includes(' hidden')) {
            dropdownRef.current[itemSelected].current.className = currentClassName.replace(' hidden', '');
            setDropdownData({
                [itemSelected]: {
                    isOpen: true,
                    height: `${dropdownRef.current[itemSelected].current.scrollHeight}px`,
                },
            });
            setShowOverlay(true);
        }
    };

    const handleDropdownMouseLeave = (elementId) => {
        const itemSelected = elementId.split('-')[1];
        const currentClassName = dropdownRef.current[itemSelected].current.className;
        if (!currentClassName.includes(' hidden')) {
            dropdownRef.current[itemSelected].current.className = currentClassName.concat(' hidden', '');
            setDropdownData({
                [itemSelected]: {
                    isOpen: false,
                    height: '0px',
                },
            });
            setShowOverlay(false);
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
                dropdownOpen={dropdownData[idx] && dropdownData[idx].isOpen}
                dropdownHeight={dropdownData[idx] && dropdownData[idx].height}
                handleMouseEnter={(id) => handleDropdownMouseEnter(id)}
                handleMouseLeave={(id) => handleDropdownMouseLeave(id)} />);
        }));
        return menuItemsHTML;
    };

    return (
        <>
            <header className='navbar'>
                <nav className='navbar-navigation'>
                    <BurgerMenuToggleBtn handleToggleBtnClick={handleBurgerMenuBtnClick} />
                    <div className='logo'>
                        <img src={logo} alt='logo' />
                    </div>
                    <ul className='items'>
                        {createMenuItemsHTML()}
                    </ul>
                </nav>
            </header>
            {showOverlay && <ScreenOverlay />}
        </>
    );
};

NavBar.propTypes = {
    handleBurgerMenuBtnClick: PropTypes.func,
    menuData: PropTypes.array,
};

export default NavBar;
