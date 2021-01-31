import React from 'react';
import PropTypes from 'prop-types';

// Called when a element is dropped into the container
const drop = (e) => {
    e.stopPropagation(); // Stops some browsers from redirecting.
    e.preventDefault();

    const elementId = e.dataTransfer.getData('text/plain');
    const element = document.getElementById(elementId);

    // If being dropped over an existing element, retrieve that element's id
    const overElementId = window.sessionStorage.getItem('overElementId');
    if (overElementId) {
        const parentContainer = document.getElementById(overElementId).parentNode;
        const overElement = document.getElementById(overElementId);
        parentContainer.insertBefore(element, overElement.nextSibling);
        window.sessionStorage.removeItem('overElementId');
    }

    // If invincible effect is used during dragging of element
    if (element.style.display === 'none') element.style.display = 'block';

    // Reset dataTransfer object
    e.dataTransfer.clearData();
};

// Called when a element is dragged over the container
const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
};

const DroppableContainer = ({
    children = [],
    id = '',
}) => (<div className='droppable-container'
    id={id}
    onDrop={drop}
    onDragOver={dragOver}>
    {children}
</div>);

DroppableContainer.propTypes = {
    children: PropTypes.array,
    id: PropTypes.string,
};

export default DroppableContainer;
