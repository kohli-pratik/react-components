import React, { useState } from 'react';
import Modal from '../../components/Modal';
import ScreenOverlay from '../../components/ScreenOverlay';

const ToggleFeatures = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalSize, setModalSize] = useState('small');

    const toggleModalFeature = (size) => {
        setShowModal(true);
        setModalSize(size);
    };

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
        </>
    );
};

export default ToggleFeatures;
