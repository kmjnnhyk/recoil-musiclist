import React from 'react';
import { useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState('Modal Content');

  const handleModal = (content) => {
    setModal(!modal);
    if (modal) {
      setModalContent(content);
    }
  };

  const closeModal = () => {
    setModal(false);
  };
  return { modal, handleModal };
};

export default useModal;
