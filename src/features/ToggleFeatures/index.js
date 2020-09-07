import React, { useState } from 'react';
import Modal from '../../components/Modal';
import ScreenOverlay from '../../components/ScreenOverlay';
import ExampleForm from '../ExampleForm';
import Accordion from '../Accordion';
import Constants from '../../utils/constants';
import Card from '../../components/Card';

import cardPlaceholderImg from '../../styles/images/card-placeholder.svg';
import Table from '../../components/Table';
import DragAndDrop from '../DragAndDrop';

const ToggleFeatures = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalSize, setModalSize] = useState('small');
    const toggleModalFeature = (size) => {
        setShowModal(true);
        setModalSize(size);
    };

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    const [showAccordion, setShowAccordion] = useState(false);
    const toggleAccordion = () => setShowAccordion(!showAccordion);

    const [showCard, setShowCard] = useState(false);
    const [cardSize, setCardSize] = useState('small');
    const toggleCard = (size) => {
        setShowCard((cardSize === size) ? !showCard : true);
        setCardSize(size);
    };

    const [showTable, setShowTable] = useState(false);
    const toggleTable = () => setShowTable(!showTable);

    const [showDragAndDrop, setShowDragAndDrop] = useState(false);
    const toggleDragAndDrop = () => setShowDragAndDrop(!showDragAndDrop);

    return (
        <>
            <main className='feature-toggle'>
                <h1 className='feature-toggle-heading'>Toggle Features</h1>
                <section className='feature-toggle-section'>
                    <h2 className='feature-toggle-section-heading'>Modal</h2>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleModalFeature('small')}>Show Example Modal - Small</button>
                        <button onClick={() => toggleModalFeature('medium')}>Show Example Modal - Medium</button>
                        <button onClick={() => toggleModalFeature('large')}>Show Example Modal - Large</button>
                    </div>
                </section>
                <section className='feature-toggle-section'>
                    <h2 className='feature-toggle-section-heading'>Form</h2>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleForm()}>Show Example Form</button>
                    </div>
                </section>
                <section className='feature-toggle-section'>
                    <h2 className='feature-toggle-section-heading'>Accordion</h2>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleAccordion()}>Show Example Accordion</button>
                    </div>
                </section>
                <section className='feature-toggle-section'>
                    <h2 className='feature-toggle-section-heading'>Card</h2>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleCard('small')}>Show Example Card - Small</button>
                        <button onClick={() => toggleCard('medium')}>Show Example Card - Medium</button>
                        <button onClick={() => toggleCard('large')}>Show Example Card - Large</button>
                    </div>
                </section>
                <section className='feature-toggle-section'>
                    <h2 className='feature-toggle-section-heading'>Table</h2>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleTable()}>Show Example Table</button>
                    </div>
                </section>
                <section className='feature-toggle-section'>
                    <h2 className='feature-toggle-section-heading'>Drag and Drop</h2>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleDragAndDrop()}>
                            Show Drag and Drop Example</button>
                    </div>
                </section>
            </main>
            {showModal && <Modal size={modalSize}
                headerTitle={'Modal Title'}
                body={'This is the body for the modal.'}
                crossIcon={true}
                closeButton={true}
                closeButtonTxt={'Cancel'}
                closeModal={() => setShowModal(false)}
                actionButton={true}
                actionButtonTxt={'Proceed'} />}
            {showModal && <ScreenOverlay />}
            {showForm && <ExampleForm />}
            {showAccordion && <Accordion id={'example-accordion'}
                data={Constants.testData.accordion}
                allowMultipleExpanded={true} />}
            {showCard && <Card id='example-card'
                size={cardSize}
                header={true}
                headerText={'Example Card'}
                footer={true}
                footerText={'Last updated 3 mins ago'}
                image={true}
                imageSrc={cardPlaceholderImg}
                title={'Example Title'}
                contentText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />}
            {showTable && <Table id='example-table'
                headerData={['Header 1', 'Header 2', 'Header 3', 'Header 4']}
                bodyData={[{
                    bodyKey1a: 'Body 1a',
                    bodyKey2a: 'Body 2a',
                    bodyKey3a: 'Body 3a',
                    bodyKey4a: 'Body 4a',
                }, {
                    bodyKey1b: 'Body 1b',
                    bodyKey2b: 'Body 2b',
                    bodyKey3b: 'Body 3b',
                    bodyKey4b: 'Body 4b',
                }, {
                    bodyKey1c: 'Body 1c',
                    bodyKey2c: 'Body 2c',
                    bodyKey3c: 'Body 3c',
                    bodyKey4c: 'Body 4c',
                }, {
                    bodyKey1d: 'Body 1d',
                    bodyKey2d: 'Body 2d',
                    bodyKey3d: 'Body 3d',
                    bodyKey4d: 'Body 4d',
                }, {
                    bodyKey1e: 'Body 1e',
                    bodyKey2e: 'Body 2e',
                    bodyKey3e: 'Body 3e',
                    bodyKey4e: 'Body 4e',
                }]}
                footerData={['Footer 1', 'Footer 2', 'Footer 3', 'Footer 4']} />}
            {showDragAndDrop && <DragAndDrop />}
        </>
    );
};

export default ToggleFeatures;
