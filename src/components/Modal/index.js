import React from 'react';
import Proptypes from 'prop-types';
import closeBtnIcon from '../../styles/images/close-btn-icon.svg';

const Modal = (props) => (
    <div className='modal-container'>
        <div className={`modal ${props.size}`}>
            <header className='modal-header'>
                <div className='modal-header-title'>{props.headerTitle}</div>
                <img src={closeBtnIcon} className='modal-header-close-btn'
                    onClick={props.closeModal}></img>
            </header>
            <main className='modal-content'>{props.body}</main>
            <footer className='modal-footer'>
                {props.actionButton && <button
                    className='modal-footer-action-btn'
                    onClick={props.handleActionBtnClick}>{props.actionButtonTxt}</button>}
                {props.closeButton && <button className='modal-footer-close-btn'
                    onClick={props.closeModal}>{props.closeButtonTxt}</button>}
            </footer>
        </div>
    </div>
);

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
