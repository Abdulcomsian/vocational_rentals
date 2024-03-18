import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalContainer({ children, show, onHide }) {
  return (
    <Modal
      centered
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
