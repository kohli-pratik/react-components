import React, { Component } from 'react';
import ToggleFeatures from '../../features/ToggleFeatures';
import BackToTop from '../../features/BackToTop';
import BottomNavigation from '../../features/BottomNavigation';
import Constants from '../../utils/constants';

class Dashboard extends Component {
    render() {
        return (
            <div id='dashboard-container'>
                <main id='dashboard-content'>
                    <ToggleFeatures />
                </main>
                <BackToTop />
                <BottomNavigation navItems={Constants.bottomNavItems} />
            </div>
        );
    }
}

export default Dashboard;
