import React, { Component } from 'react';
import NavBar from '../../features/NavBar';
import SideDrawer from '../../features/SideDrawer';
import ScreenOverlay from '../../components/ScreenOverlay';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

class Dashboard extends Component {
    state = {
        sideDrawerOpen: false,
        showModal: true,
    };

    handleDrawerToggleClick = () => {
        this.setState((prevState) => ({
            sideDrawerOpen: !prevState.sideDrawerOpen,
        }));
    }

    handleScreenOverlayClick = () => {
        this.setState({ sideDrawerOpen: false });
    }

    handleCloseBtnClick = () => {
        console.log('TEST');
        this.setState({ showModal: false });
    }

    render() {
        const { sideDrawerOpen, showModal } = this.state;
        const screenOverlay = (sideDrawerOpen || showModal)
            ? <ScreenOverlay handleClick={this.handleScreenOverlayClick} />
            : undefined;

        return (
            <div id='dashboard-container'>
                <NavBar handleDrawerBtnClick={this.handleDrawerToggleClick} />
                <SideDrawer show={sideDrawerOpen} />
                {showModal && <Modal size={'large'}
                    headerTitle={'Modal Title'}
                    closeButton={true}
                    closeButtonTxt={'Cancel'}
                    handleCloseBtnClick={() => this.handleCloseBtnClick()}
                    actionButton={true}
                    actionButtonTxt={'Proceed'} />}
                {screenOverlay}
                <main id='dashboard-content'>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
