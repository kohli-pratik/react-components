import React, { useEffect, useState } from 'react';
import chevronUp from '../../styles/images/chevron-up.svg';

const BackToTop = () => {
    const [className, setClassName] = useState('backToTopBtn hidden');
    const handleScroll = () => {
        if (window.pageYOffset > 200 && className.includes('hidden')) {
            setClassName('backToTopBtn');
        }

        if (window.pageYOffset <= 200 && !className.includes('hidden')) {
            setClassName('backToTopBtn hidden');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return (() => {
            window.removeEventListener('scroll', () => { });
        });
    });

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return <button className={className} onClick={() => goToTop()}>
        <img src={chevronUp} className='backToTopBtn-icon' />
    </button>;
};

export default BackToTop;
