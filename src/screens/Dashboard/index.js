import React, { Component } from 'react';
import NavBar from '../../features/NavBar';
import SideDrawer from '../../features/SideDrawer';
import ScreenOverlay from '../../components/ScreenOverlay';
import Footer from '../../components/Footer';
import Constants from '../../utils/constants';
import ToggleFeatures from '../../features/ToggleFeatures';
import BackToTop from '../../features/BackToTop';

class Dashboard extends Component {
    state = {
        sideDrawerOpen: false,
    };

    handleDrawerToggleClick = () => {
        this.setState((prevState) => ({
            sideDrawerOpen: !prevState.sideDrawerOpen,
        }));
    }

    handleScreenOverlayClick = () => {
        this.setState((prevState) => ({
            sideDrawerOpen: !prevState.sideDrawerOpen,
        }));
    }

    render() {
        const { sideDrawerOpen, showModal } = this.state;
        const screenOverlay = (sideDrawerOpen || showModal)
            ? <ScreenOverlay handleClick={this.handleScreenOverlayClick} />
            : undefined;

        return (
            <div id='dashboard-container'>
                <NavBar handleDrawerBtnClick={this.handleDrawerToggleClick}
                    menuData={Constants.testData.menuData} />
                <SideDrawer show={sideDrawerOpen} />
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
