import React from 'react';
import Proptypes from 'prop-types';

const generateChildren = (footerText) => {
    const children = [];
    Object.keys(footerText)
        .forEach((key, idx) => children.push(<p key={idx}>{footerText[key]}</p>));
    return children;
};

const Footer = ({ footerText }) => (
    <footer className='footer'>
        {generateChildren(footerText)}
    </footer>
);

Footer.propTypes = {
    footerText: Proptypes.object,
};

export default Footer;
