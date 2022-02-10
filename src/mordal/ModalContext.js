import React from 'react';
import Modal from './Modal';
import useModal from './useModal';

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  const { modal, modalContent, openModal, closeModal } = useModal();
  return (
    <ModalContext.Provider value={{ modal, modalContent, openModal, closeModal }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
