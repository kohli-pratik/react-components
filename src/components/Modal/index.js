import React from 'react';
import Proptypes from 'prop-types';

const Modal = (props) => (
    <div className='modal-container'>
        <div className={`modal ${props.size}`}>
            <header className='modal-header'>
                <p className='modal-header-title'>{props.headerTitle}</p>
            </header>
            <main className='modal-content'></main>
            <footer className='modal-footer'>
                {props.actionButton && <button
                    className='modal-footer-action-btn'
                    onClick={props.handleActionBtnClick}>{props.actionButtonTxt}</button>}
                {props.closeButton && <button className='modal-footer-close-btn'
                    onClick={props.handleCloseBtnClick}>{props.closeButtonTxt}</button>}
            </footer>
        </div>
    </div>
);

Modal.propTypes = {
    size: Proptypes.string,
    headerTitle: Proptypes.string,
    closeButton: Proptypes.bool,
    closeButtonTxt: Proptypes.string,
    handleCloseBtnClick: Proptypes.func,
    actionButton: Proptypes.bool,
    actionButtonTxt: Proptypes.string,
    handleActionBtnClick: Proptypes.func,
};

export default Modal;
