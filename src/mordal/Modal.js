/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import StyleAtoms from '../StyleAtoms';

const Modal = ({ modal, modalContent }) => {
  const el = document.getElementById('modal');

  if (modal) {
    return ReactDOM.createPortal(
      <>
        <StyleAtoms.Modal height={'64px'} background={'var(--orange)'}>
          {modalContent}
        </StyleAtoms.Modal>
      </>,
      el
    );
  } else return <></>;
};

export default Modal;
