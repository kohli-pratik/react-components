import React from 'react';
import Proptypes from 'prop-types';
import chevronRight from '../../../../styles/images/chevron-right.svg';

const AccordionSection = ({
    sectionNumber,
    title,
    content,
    toggleAccordion,
    contentRef,
    active = '',
    rotateChevron = '',
    contentHeight = '0px',
}) => (<section className='accordion-section' id={`accordion-section-${sectionNumber}`}>
    <header className={`accordion-section-header ${active}`} id={`accordion-section-${sectionNumber}-header`}
        onClick={(event) => toggleAccordion(event)}>
        <p className='accordion-section-header-title'>{title}</p>
        <img src={chevronRight} className={`accordion-section-header-icon ${rotateChevron}`}></img>
    </header>
    <main ref={contentRef} className='accordion-section-content'
        style={{ maxHeight: `${contentHeight}` }}>
        <div className='accordion-section-content-text'>{content}</div>
    </main>
</section >);

AccordionSection.propTypes = {
    sectionNumber: Proptypes.number,
    title: Proptypes.string,
    content: Proptypes.string,
    toggleAccordion: Proptypes.func,
    contentRef: Proptypes.any,
    active: Proptypes.string,
    rotateChevron: Proptypes.string,
    contentHeight: Proptypes.string,
};

export default AccordionSection;
