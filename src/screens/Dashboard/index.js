import React, { Component } from 'react';
import NavBar from '../../features/NavBar';
import SideDrawer from '../../features/SideDrawer';
import ScreenOverlay from '../../components/ScreenOverlay';
import Footer from '../../components/Footer';

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
        this.setState({ sideDrawerOpen: false });
    }

    render() {
        const { sideDrawerOpen } = this.state;
        const screenOverlay = (sideDrawerOpen)
            ? <ScreenOverlay handleClick={this.handleScreenOverlayClick} />
            : undefined;

        return (
            <div id='dashboard-container'>
                <NavBar handleDrawerBtnClick={this.handleDrawerToggleClick} />
                <SideDrawer show={sideDrawerOpen} />
                {screenOverlay}
                <main id='dashboard-content'>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
