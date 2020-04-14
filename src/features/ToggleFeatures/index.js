import React, { useState } from 'react';
import Modal from '../../components/Modal';
import ScreenOverlay from '../../components/ScreenOverlay';
import ExampleForm from '../ExampleForm';
// import ExampleAccordion from '../ExampleAccordion';
import Accordion from '../Accordion';
import Constants from '../../utils/constants';

const ToggleFeatures = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalSize, setModalSize] = useState('small');
    const toggleModalFeature = (size) => {
        setShowModal(true);
        setModalSize(size);
    };

    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    const [showAccordion, setShowAccordion] = useState(true);
    const toggleAccordion = () => setShowAccordion(!showAccordion);

    return (
        <>
            <section className='feature-toggle'>
                <h1>Toggle Features</h1>
                <section className='feature-toggle-section'>
                    <h1>Modal</h1>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleModalFeature('small')}>Show Modal - Small</button>
                        <button onClick={() => toggleModalFeature('medium')}>Show Modal - Medium</button>
                        <button onClick={() => toggleModalFeature('large')}>Show Modal - Large</button>
                    </div>
                </section>
                <section className='feature-toggle-section'>
                    <h1>Form</h1>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleForm()}>Show Example Form</button>
                    </div>
                </section>
                <section className='feature-toggle-section'>
                    <h1>Accordion</h1>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleAccordion()}>Show Example Accordion</button>
                    </div>
                </section>
            </section>
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
        </>
    );
};

export default ToggleFeatures;
