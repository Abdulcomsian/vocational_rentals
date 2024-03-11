import Modal from "./Modal";
import Warning from "../../../public/images/trash-bin.png";

export default function DeleteModal() {
  return (
    <Modal>
      <div className="icon-modal">
        <Image src={Warning} alt="" />
      </div>
      <h4 className="text-dark text-center mt-4">Are you sure?</h4>
      <p className="text-muted mx-4 mb-0 text-center mt-1">
        Are you sure you want to Cancel this Subscription?
      </p>
      <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
        <button
          type="button"
          className="btn w-sm btn-light"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn w-sm btn-danger">
          Yes, Cancel It!
        </button>
      </div>
    </Modal>
  );
}
