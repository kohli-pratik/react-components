import React, { Component } from 'react';
import chevronUp from '../../styles/images/chevron-up.svg';

class BackToTop extends Component {
    state = {
        className: 'backToTopBtn hidden',
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', () => { });
    }

    handleScroll = () => {
        let { className } = this.state;
        if (window.pageYOffset > 200 && className.includes('hidden')) {
            this.setState({ className: className.replace(' hidden', '') });
        }

        if (window.pageYOffset <= 200 && !className.includes('hidden')) {
            this.setState({ className: className += ' hidden' });
        }
    }

    goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    render() {
        const { className } = this.state;
        return (
            <>
                <button className={className} onClick={() => this.goToTop()}>
                    <img src={chevronUp} className='backToTopBtn-icon' />
                </button>
            </>
        );
    }
}

export default BackToTop;
