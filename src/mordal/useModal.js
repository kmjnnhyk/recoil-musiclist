import { useRef } from 'react';
import { useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("I'm the Modal Content");
  const timer = useRef(null);

  const openModal = (content) => {
    console.log('open modal', timer.current);
    if (!content) throw Error('no content in openModal');
    /* 타이머 충돌 처리 */
    if (modal) {
      clearTimeout(timer.current);
      setModal(false);
      setModalContent();
    }
    setModal(true);
    setModalContent(content);

    timer.current = setTimeout(() => {
      setModal(false);
    }, 3000);
    return () => clearTimeout(timer.current);
  };
  return { modal, modalContent, openModal };
};

export default useModal;
