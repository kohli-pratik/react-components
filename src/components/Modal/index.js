import React from 'react';
import Proptypes from 'prop-types';
import closeIconBtn from '../../styles/images/close-btn-icon.svg';

const Modal = ({
    size = 'medium',
    headerTitle = '',
    body = '',
    actionButton = false,
    handleActionBtnClick,
    actionButtonTxt,
    closeButton = true,
    closeModal = () => null,
    closeButtonTxt = 'Close',
}) => (<div className='modal-container'>
    <div className={`modal ${size}`}>
        <header className='modal-header'>
            <div className='modal-header-title'>{headerTitle}</div>
            <img src={closeIconBtn} className='modal-header-close-btn'
                alt='modal-close-button' onClick={closeModal}></img>
        </header>
        <main className='modal-content'>{body}</main>
        <footer className='modal-footer'>
            {actionButton && <button
                className='modal-footer-action-btn'
                onClick={handleActionBtnClick}>{actionButtonTxt}</button>}
            {closeButton && <button className='modal-footer-close-btn'
                onClick={closeModal}>{closeButtonTxt}</button>}
        </footer>
    </div>
</div>);

Modal.propTypes = {
    size: Proptypes.string,
    headerTitle: Proptypes.string,
    body: Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.array,
    ]),
    closeButton: Proptypes.bool,
    closeButtonTxt: Proptypes.string,
    closeModal: Proptypes.func,
    actionButton: Proptypes.bool,
    actionButtonTxt: Proptypes.string,
    handleActionBtnClick: Proptypes.func,
};

export default Modal;
