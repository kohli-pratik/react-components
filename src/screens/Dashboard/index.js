import React, { Component } from 'react';
import NavBar from '../../features/NavBar';
import SideDrawer from '../../features/SideDrawer';
import ScreenOverlay from '../../components/ScreenOverlay';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import Constants from '../../utils/constants';

class Dashboard extends Component {
    state = {
        sideDrawerOpen: false,
        showModal: false,
        modalSize: 'small',
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

    toggleModalFeature = (size) => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal,
            modalSize: size,
        }));
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        const { sideDrawerOpen, showModal, modalSize } = this.state;
        const screenOverlay = (sideDrawerOpen || showModal)
            ? <ScreenOverlay handleClick={this.handleScreenOverlayClick} />
            : undefined;

        return (
            <div id='dashboard-container'>
                <NavBar handleDrawerBtnClick={this.handleDrawerToggleClick} />
                <SideDrawer show={sideDrawerOpen} />
                {showModal && <Modal size={modalSize}
                    headerTitle={'Modal Title'}
                    body={'This is the body for the modal.'}
                    crossIcon={true}
                    closeButton={true}
                    closeButtonTxt={'Cancel'}
                    closeModal={() => this.closeModal()}
                    actionButton={true}
                    actionButtonTxt={'Proceed'} />}
                {screenOverlay}
                <main id='dashboard-content'>
                    <section className='feature-toggle'>
                        <h1>Toggle Features</h1>
                        <section className='feature-toggle-section'>
                            <h1>Modal</h1>
                            <div className='feature-toggle-section-buttons'>
                                <button onClick={() => this.toggleModalFeature('small')}>Show Modal - Small</button>
                                <button onClick={() => this.toggleModalFeature('medium')}>Show Modal - Medium</button>
                                <button onClick={() => this.toggleModalFeature('large')}>Show Modal - Large</button>
                            </div>
                        </section>
                    </section>
                </main>
                <Footer footerText={Constants.strings.footerText} />
            </div>
        );
    }
}

export default Dashboard;
