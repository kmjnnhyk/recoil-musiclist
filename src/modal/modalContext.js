import React from 'react';

const ModalContext = React.createContext();

const ModalProvider = ({ children }) => {
  return <ModalContext.Provider>{children}</ModalContext.Provider>;
};
