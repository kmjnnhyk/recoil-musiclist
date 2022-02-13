import React from 'react';
import Modal from './Modal';
import useModal from './useModal';

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const { modal, modalContent, openModal } = useModal();
  return (
    <ModalContext.Provider value={{ openModal }}>
      <Modal modal={modal} modalContent={modalContent} />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
