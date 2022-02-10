import React from 'react';
import { useEffect } from 'react';
import { Transition } from 'react-transition-group';
import StyleAtoms from '../StyleAtoms';
import { ModalContext } from './ModalContext';

function Modal() {
  const { modal, modalContent, closeModal } = React.useContext(ModalContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [closeModal]);

  return (
    <>
      {modal && (
        <Transition in={modal} timeout={500}>
          {(state) => (
            <StyleAtoms.Modal state={state} height={'64px'} background={'var(--orange)'}>
              {modalContent}
            </StyleAtoms.Modal>
          )}
        </Transition>
      )}
    </>
  );
}

export default Modal;
