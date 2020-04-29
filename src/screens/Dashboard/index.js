import React, { Component } from 'react';
import NavBar from '../../features/NavBar';
import BurgerMenu from '../../features/BurgerMenu';
import ScreenOverlay from '../../components/ScreenOverlay';
import Footer from '../../components/Footer';
import Constants from '../../utils/constants';
import ToggleFeatures from '../../features/ToggleFeatures';
import BackToTop from '../../features/BackToTop';

class Dashboard extends Component {
    state = {
        mobileMenuOpen: false,
    };

    handleDrawerToggleClick = () => {
        this.setState((prevState) => ({
            mobileMenuOpen: !prevState.mobileMenuOpen,
        }));
    }

    handleScreenOverlayClick = () => {
        this.setState((prevState) => ({
            mobileMenuOpen: !prevState.mobileMenuOpen,
        }));
    }

    render() {
        const { mobileMenuOpen, showModal } = this.state;
        const screenOverlay = (mobileMenuOpen || showModal)
            ? <ScreenOverlay handleClick={this.handleScreenOverlayClick} />
            : undefined;

        return (
            <div id='dashboard-container'>
                <NavBar handleBurgerMenuBtnClick={this.handleDrawerToggleClick}
                    menuData={Constants.testData.menuData} />
                <BurgerMenu open={mobileMenuOpen}
                    menuData={Constants.testData.menuData} />
                {screenOverlay}
                <main id='dashboard-content'>
                    <ToggleFeatures />
                </main>
                <BackToTop />
                <Footer footerText={Constants.strings.footerText} />
            </div>
        );
    }
}

export default Dashboard;
