import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BottomNavigationItem from './components/BottomNavigationItem';

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

    generateBottomNavItems = (items) => {
        const itemsHTML = [];
        items.forEach((item) => {
            itemsHTML.push(<BottomNavigationItem id={`${item.name}-bottom-nav-item`}
                icon={item.icon}
                name={item.name}
                handleClick={this.handleBottomNavItemClick} />);
        });
        return itemsHTML;
    }

    render() {
        const { id, navItems } = this.props;
        const { className } = this.state;
        return (<nav className={className} id={id}>
            {this.generateBottomNavItems(navItems)}
        </nav>);
    }
}

BottomNavigation.propTypes = {
    id: PropTypes.string,
    navItems: PropTypes.array,
};

export default BottomNavigation;
