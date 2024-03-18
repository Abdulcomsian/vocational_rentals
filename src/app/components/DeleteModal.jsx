import DeleteIcon from "../../../public/images/trash-bin.png";
import Button from "./Button";
import ModalContainer from "./ModalContainer";
import Image from "next/image";

export default function DeleteModal({ show, onHide, handleDeleteItem }) {
  return (
    <ModalContainer show={show} onHide={onHide}>
      <div className="icon-modal text-center">
        <Image src={DeleteIcon} alt="" width={100} />
      </div>
      <h4 className="text-dark text-center mt-4">Are you sure?</h4>
      <p className="text-muted mx-4 mb-0 text-center mt-1">
        Are you sure you want to Cancel this Subscription?
      </p>
      <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
        <Button className="btn w-sm btn-light" onClick={onHide}>
          Close
        </Button>

        <Button className="btn w-sm btn-danger" onClick={handleDeleteItem}>
          Yes, Cancel It!
        </Button>
      </div>
    </ModalContainer>
  );
}
