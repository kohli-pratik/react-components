import React, { useState } from 'react';
import Modal from '../../components/Modal';
import ScreenOverlay from '../../components/ScreenOverlay';
import ExampleForm from '../ExampleForm';
import Accordion from '../Accordion';
import Constants from '../../utils/constants';
import Card from '../../components/Card';

import cardPlaceholderImg from '../../styles/images/card-placeholder.svg';

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

    return (
        <>
            <section className='feature-toggle'>
                <h1>Toggle Features</h1>
                <section className='feature-toggle-section'>
                    <h1>Modal</h1>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleModalFeature('small')}>Show Example Modal - Small</button>
                        <button onClick={() => toggleModalFeature('medium')}>Show Example Modal - Medium</button>
                        <button onClick={() => toggleModalFeature('large')}>Show Example Modal - Large</button>
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
                <section className='feature-toggle-section'>
                    <h1>Card</h1>
                    <div className='feature-toggle-section-buttons'>
                        <button onClick={() => toggleCard('small')}>Show Example Card - Small</button>
                        <button onClick={() => toggleCard('medium')}>Show Example Card - Medium</button>
                        <button onClick={() => toggleCard('large')}>Show Example Card - Large</button>
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
        </>
    );
};

export default ToggleFeatures;
