import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BottomNavigationItem from './components/BottomNavigationItem';
import profileIcon from '../../styles/images/profile-icon.png';
import settingsIcon from '../../styles/images/settings-icon.png';
import notificationIcon from '../../styles/images/notification-icon.png';

class BottomNavigation extends Component {
    state = {
        className: 'bottom-navigation visible',
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', () => { });
    }

    handleScroll = () => {
        const { className } = this.state;
        const reachedBottomOfScreen = (window.innerHeight + window.scrollY) === document.body
            .offsetHeight;

        if (reachedBottomOfScreen && !className.includes('hidden')) {
            this.setState({ className: className.replace('visible', 'hidden') });
        } else if (className.includes('hidden')) {
            this.setState({ className: className.replace('hidden', 'visible') });
        }
    }

    handleBottomNavItemClick = (event) => {
        alert(`${event.target.id} clicked.`);
    }

    render() {
        const { id } = this.props;
        const { className } = this.state;
        return (<nav className={className} id={id}>
            <BottomNavigationItem id='profile-bottom-nav-item'
                icon={profileIcon}
                name='Profile'
                handleClick={this.handleBottomNavItemClick} />
            <BottomNavigationItem id='notifications-bottom-nav-item'
                icon={notificationIcon}
                name='Notifications'
                handleClick={this.handleBottomNavItemClick} />
            <BottomNavigationItem id='settings-bottom-nav-item'
                icon={settingsIcon}
                name='Settings'
                handleClick={this.handleBottomNavItemClick} />
        </nav>);
    }
}

BottomNavigation.propTypes = {
    id: PropTypes.string,
};

export default BottomNavigation;
