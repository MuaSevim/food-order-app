import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import styles from './Modal.module.css';

const Backdrop = props => (
  <div className={styles.backdrop} onClick={props.onClick} />
);

const ModalOverlay = props => {
  return <Card className={styles.overlay}>{props.children}</Card>;
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onBackdropClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
