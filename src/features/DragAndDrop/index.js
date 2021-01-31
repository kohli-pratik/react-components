import React from 'react';
import DroppableContainer from './components/DroppableContainer';
import DraggableElement from './components/DraggableElement';

const DragAndDrop = () => (<div className='drag-n-drop-container'>
    <DroppableContainer id='droppable-container-1'>
        <DraggableElement id='draggable-element-1'
            invincibleEffect={true}>
            <p>Draggable Element 1</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-2'>
            <p>Draggable Element 2</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-3'>
            <p>Draggable Element 3</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-4'>
            <p>Draggable Element 4</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-5'>
            <p>Draggable Element 5</p>
        </DraggableElement>
    </DroppableContainer>
    <DroppableContainer id='droppable-container-2'>
        <DraggableElement id='draggable-element-6'>
            <p>Draggable Element 6</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-7'>
            <p>Draggable Element 7</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-8'>
            <p>Draggable Element 8</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-9'>
            <p>Draggable Element 9</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-10'>
            <p>Draggable Element 10</p>
        </DraggableElement>
        <DraggableElement id='draggable-element-11'>
            <p>Draggable Element 11</p>
        </DraggableElement>
    </DroppableContainer>
</div>);

export default DragAndDrop;
