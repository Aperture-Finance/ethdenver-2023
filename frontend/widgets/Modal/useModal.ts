import React, { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import get from "lodash/get";
import { Context } from "./ModalContext";
import { Handler } from "./types";

// const useModal = (
//   modal: React.ReactNode,
//   closeOnOverlayClick = true,
//   updateOnPropsChange = false,
//   modalId = "defaultNodeId"
// ): [Handler, Handler] => {

//   const { isOpen, nodeId, modalNode, setModalNode, onPresent, onDismiss } = useContext(Context);
//   const onPresentCallback = useCallback(() => {
//     onPresent(modal, modalId, closeOnOverlayClick);
//   }, [modal, modalId, onPresent, closeOnOverlayClick]);
//   useEffect(() => {

//     if (updateOnPropsChange && isOpen && nodeId === modalId) {
//       const modalProps = get(modal, "props");
//       const oldModalProps = get(modalNode, "props");
//       if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
//         setModalNode(modal);
//       }
//     }
//   }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);

//   return [onPresentCallback, onDismiss];
// };

// export default useModal;

const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>("I'm the Modal Content");

  const handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};

export default useModal;
