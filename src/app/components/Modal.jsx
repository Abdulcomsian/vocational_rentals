import React from "react";

export default function Modal({ children, show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={handleHideModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
