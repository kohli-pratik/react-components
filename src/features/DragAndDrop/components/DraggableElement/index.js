import React from 'react';
import PropTypes from 'prop-types';

// Called when a element is starting to be dragged
const dragStart = (e) => {
    const { target } = e;

    e.dataTransfer.setData('elementId', target.id);

    // Add a delay so the dragged element is invinsible after a reference to it is procured
    setTimeout(() => {
        target.style.display = 'none';
    }, 0);
};

// Called to prevent dropping an draggable element over another draggable element
const dragOver = (e) => {
    e.stopPropagation();
};

// Called at the end of drag even to handle if the event was cancelled
const dragEnd = (e) => {
    if (e.dataTransfer.dropEffect === 'none') {
        e.target.style.display = 'block';
    }
};

const DraggableElement = ({
    children = [],
    id = '',
}) => (<div className='draggable-element'
    id={id}
    draggable='true'
    onDragStart={dragStart}
    onDragOver={dragOver}
    onDragEnd={dragEnd}>
    {children}
</div>);

DraggableElement.propTypes = {
    children: PropTypes.array,
    id: PropTypes.string,
};

export default DraggableElement;
