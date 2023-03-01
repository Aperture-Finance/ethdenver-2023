import React, { createContext } from "react";
import styled from "styled-components";
import useModal from "./useModal";

export const Context = createContext({});

const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <Context.Provider value={{ modal, handleModal, modalContent }}>
      {/* <ModalWrapper> */}
      {children}
      {/* </ModalWrapper> */}
    </Context.Provider>
  );
};

export default ModalProvider;
