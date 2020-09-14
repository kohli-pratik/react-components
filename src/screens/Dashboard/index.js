import React, { Component } from 'react';
import ToggleFeatures from '../../features/ToggleFeatures';
import BackToTop from '../../features/BackToTop';

class Dashboard extends Component {
    render() {
        return (
            <div id='dashboard-container'>
                <main id='dashboard-content'>
                    <ToggleFeatures />
                </main>
                <BackToTop />
            </div>
        );
    }
}

export default Dashboard;
