import { useEffect } from "react";
import { ModalContent, Modal, ModalChildren, ModalCloseBtn, ModalClosetSvg } from "./Modal.styled";
import closeSvg from "assets/close.svg";

export const ModalWindow = ({ isOpen, onClose, children }) => {
  const body = document.querySelector("body");

  const onCloseModal = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }

    if (evt.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onCloseModal);
      body.classList.add("disable-scroll");
    }
    return () => {
      document.removeEventListener("keydown", onCloseModal);
      body.classList.remove("disable-scroll");
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <Modal id="modal-win" onClick={onCloseModal}>
          <ModalContent>
            <ModalCloseBtn onClick={onClose}>
              <ModalClosetSvg>
                <use href={`${closeSvg}#icon-x`} />
              </ModalClosetSvg>
            </ModalCloseBtn>
            <ModalChildren>{children}</ModalChildren>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
