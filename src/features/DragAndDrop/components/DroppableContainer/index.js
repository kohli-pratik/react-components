import React from 'react';
import PropTypes from 'prop-types';

// Called when a element is dropped into the container
const drop = (e) => {
    e.preventDefault();
    const elementId = e.dataTransfer.getData('elementId');

    const element = document.getElementById(elementId);
    element.style.display = 'block';

    e.target.appendChild(element);
};

// Called when a element is dragged over the container
const dragOver = (e) => {
    e.preventDefault();
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
