import { useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("I'm the Modal Content");

  const openModal = (content) => {
    setModal(true);
    if (content) {
      setModalContent(content);
    } else throw Error('no content in openModal');
  };

  const closeModal = () => {
    setModal(false);
    setModalContent();
  };
  return { modal, modalContent, openModal, closeModal };
};

export default useModal;
