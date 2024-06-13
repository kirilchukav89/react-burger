import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({ setVisibleModal }) => {
  return <div className={styles.overlay} onClick={() => setVisibleModal(false)}/>
}

ModalOverlay.propTypes = {
  setVisibleModal: PropTypes.func.isRequired
}; 

export default ModalOverlay;
