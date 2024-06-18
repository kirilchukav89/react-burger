import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { Button, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById("react-modals");

const Modal = ({ children, modalHeader, closeModal }) => {
  useEffect(() => {
    const close = (event) => {
      if(event.key === "Escape"){
        closeModal();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  },[])

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <ModalOverlay closeModal={closeModal} />
      <div className={styles.container}>
        <div className={`${styles.header} text text_type_main-large`}>
          {modalHeader}
        </div>
        <Button htmlType="button" type="secondary" extraClass={styles.closeButton} onClick={() => closeModal()}>
          <CloseIcon type="primary"/>
        </Button>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  , modalRoot)
} 

Modal.propTypes = {
  children: PropTypes.any,
  modalHeader: PropTypes.string,
  closeModal: PropTypes.func.isRequired
}; 

export default Modal;