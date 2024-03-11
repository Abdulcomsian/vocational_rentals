import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "rc-image";
import DeleteIcon from "../../../../public/images/trash-bin.png";

export default function DealRemoveModal({ show, onHideModal, onDeleteDeal }) {
  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Body>
        <div className="icon-modal">
          <Image src={DeleteIcon} alt="" />
        </div>
        <h4 className="text-dark text-center mt-4">Are you sure?</h4>
        <p className="text-muted mx-4 mb-0 text-center mt-1">
          Are you sure you want to Delete this Deal?
        </p>
        <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
          <button
            type="button"
            className="btn w-sm btn-light"
            onClick={onHideModal}
          >
            Close
          </button>
          <button
            type="button"
            className="btn w-sm btn-danger"
            onClick={onDeleteDeal}
          >
            Yes, Delete It!
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
