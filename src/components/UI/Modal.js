import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import styles from './Modal.module.css';

const Backdrop = () => <div className={styles.backdrop} />;

const ModalOverlay = props => {
  return <Card className={styles.overlay}>{props.children}</Card>;
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
