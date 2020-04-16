import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
    id = '',
    size = 'large',
    header = false,
    headerText = '',
    footer = false,
    footerText = '',
    image = false,
    imageSrc = '',
    title = '',
    contentText = '',

}) => (<div className={`card ${size}`} id={id}>
    {header && <header className='card-header'><p className='card-header-text'>{headerText}</p></header>}
    <main className='card-content'>
        {image && <section className='card-content-image-container'>
            <img src={imageSrc}></img>
        </section>}
        <section className='card-content-text-container'>
            <div className='card-content-text-container-title'><p>{title}</p></div>
            <div className='card-content-text-container-text'>{contentText}</div>
        </section>
    </main>
    {footer && <footer className='card-footer'><p className='card-footer-text'>{footerText}</p></footer>}
</div >);

Card.propTypes = {
    id: PropTypes.string,
    size: PropTypes.string,
    header: PropTypes.bool,
    headerText: PropTypes.string,
    footer: PropTypes.bool,
    footerText: PropTypes.string,
    image: PropTypes.bool,
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    contentText: PropTypes.string,
};

export default Card;
