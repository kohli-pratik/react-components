import React, { useState } from 'react';
import ScreenOverlay from '../../components/ScreenOverlay';
import NavBar from '../NavBar';
import BurgerMenu from '../BurgerMenu';
import Constants from '../../utils/constants';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleDrawerToggleClick = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleScreenOverlayClick = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const screenOverlay = (mobileMenuOpen)
        ? <ScreenOverlay handleClick={handleScreenOverlayClick} />
        : undefined;

    return (<>
        <NavBar handleBurgerMenuBtnClick={handleDrawerToggleClick}
            menuData={Constants.testData.menuData} />
        <BurgerMenu open={mobileMenuOpen}
            menuData={Constants.testData.menuData} />
        {screenOverlay}
    </>);
};

export default Header;
