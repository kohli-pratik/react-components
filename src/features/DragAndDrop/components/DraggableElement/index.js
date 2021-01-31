import React from 'react';
import PropTypes from 'prop-types';

const DraggableElement = ({
    children = [],
    id = '',
    invincibleEffect = false,
}) => {
    // Called when a element is starting to be dragged
    const dragStart = (e) => {
        const { target } = e;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', target.id);

        if (invincibleEffect) {
            // Add a delay so the dragged element is invinsible after a reference to it is procured
            setTimeout(() => {
                target.style.display = 'none';
            }, 0);
        } else {
            target.style.opacity = '0.4';
        }
    };

    // Called to prevent dropping an draggable element over another draggable element
    const dragOver = (e) => {
        e.stopPropagation();
    };

    // Called at the end of drag even to handle if the event was cancelled
    const dragEnd = (e) => {
        const { target } = e;

        if (invincibleEffect) {
            if (e.dataTransfer.dropEffect === 'none') {
                target.style.display = 'block';
            }
        } else {
            target.style.opacity = '1';
        }
    };

    // Called when the element being dragged enters a valid drop target
    const dragEnter = (e) => {
        const { target } = e;
        target.classList.add('over');

        // If dragged over an existing element, capture that element's id
        window.sessionStorage.setItem('overElementId', target.id);
    };

    // Called when the element being dragged leaves a valid drop target
    const dragLeave = (e) => {
        const { target } = e;
        target.classList.remove('over');
    };

    return (<div className='draggable-element'
        id={id}
        draggable='true'
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}>
        {children}
    </div>);
};

DraggableElement.propTypes = {
    children: PropTypes.array,
    id: PropTypes.string,
    invincibleEffect: PropTypes.bool,
};

export default DraggableElement;
