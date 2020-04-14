import React, { useState, useRef, createRef } from 'react';
import Proptypes from 'prop-types';
import AccordionSection from './components/AccordionSection';

const Accordion = ({
    id,
    data = {},
    allowMultipleExpanded = false,
}) => {
    const [sectionState, setSectionState] = useState({});
    const contentRefs = useRef(data.map(() => createRef()));

    const toggleAccordion = (event) => {
        const sectionClicked = event.target.id.split('-')[2];
        const sectionToToggle = sectionState[sectionClicked];
        const active = (sectionToToggle === undefined || sectionToToggle.active === '')
            ? 'active' : '';
        const rotateChevron = (active === 'active') ? 'rotate' : '';
        const contentHeight = (active === 'active') ? `${contentRefs.current[sectionClicked]
            .current.scrollHeight}px` : '0px';
        if (allowMultipleExpanded) {
            setSectionState({
                ...sectionState,
                [sectionClicked]: { active, rotateChevron, contentHeight },
            });
        } else {
            setSectionState({ [sectionClicked]: { active, rotateChevron, contentHeight } });
        }
    };

    const generateSections = () => {
        const sections = [];
        data.forEach((sectionData, idx) => {
            sections.push(<AccordionSection key={idx} sectionNumber={idx} title={sectionData.title}
                content={sectionData.content} contentRef={contentRefs.current[idx]}
                toggleAccordion={(event) => toggleAccordion(event)}
                active={sectionState[idx] && sectionState[idx].active}
                rotateChevron={sectionState[idx] && sectionState[idx].rotateChevron}
                contentHeight={sectionState[idx] && sectionState[idx].contentHeight}
            />);
        });
        return sections;
    };

    return (
        <div className='accordion-container' id={id}>
            {generateSections()}
        </div>);
};

Accordion.propTypes = {
    id: Proptypes.string,
    data: Proptypes.array,
    allowMultipleExpanded: Proptypes.bool,
};

export default Accordion;
