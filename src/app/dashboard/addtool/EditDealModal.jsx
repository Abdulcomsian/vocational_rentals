import { useFormik } from "formik";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const billingIntervalOptions = [
  { id: "lifetime", option: "Lifetime" },
  { id: "annual", option: "Annual" },
  { id: "monthly", option: "Monthly" },
  { id: "once", option: "Once" },
];

const dealTypeOptions = [
  { id: "url", option: "URL" },
  { id: "code", option: "Code" },
];

const BillingIntervalOption = function ({
  options,
  selectedBillInterval,
  onSeledBillInterval,
}) {
  return (
    <div className="intervals">
      {options.map((option) => (
        <span
          className={selectedBillInterval === option.id ? "active" : ""}
          onClick={() => onSeledBillInterval(option.id)}
        >
          {option.option}
        </span>
      ))}
    </div>
  );
};

const DealTypes = function ({ options, selectedType, onSelectedType }) {
  return (
    <div className="intervals">
      {options.map((option) => (
        <span
          className={selectedType === option.id ? "active" : ""}
          onClick={() => onSelectedType(option.id)}
        >
          {option.option}
        </span>
      ))}
    </div>
  );
};

export default function EditDealModal({
  initialValues,
  show,
  onHideModal,
  handleSubmit,
}) {
  const [inputValues, setInputValues] = useState(initialValues);
  const [selectedBillInterval, setSelectedBillInterval] = useState("monthly");
  const [dealType, setDealType] = useState("url");

  const handleHideModal = function () {
    onHideModal();
  };

  const handleChange = function (e) {
    setInputValues({
      ...inputValues,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleHideModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <section className="editcompany">
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Deal Name</label>
                    <input
                      type="text"
                      id="deal_name"
                      name="deal_name"
                      className="form-control"
                      placeholder="Enter Deal Name"
                      value={inputValues.deal_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label className="form-label">Currency</label>
                      <select
                        id="currency"
                        name="currency"
                        className="form-select"
                        aria-label="Default select example"
                        value={inputValues.currency}
                        onChange={handleChange}
                      >
                        <option selected disabled>
                          Select Currency
                        </option>
                        <option value="USD">$ - USD</option>
                        <option value="GBP">£ - Pound</option>
                        <option value="EUR">€ - Euro</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Discount Price</label>
                      <input
                        type="number"
                        id="discount_price"
                        name="discount_price"
                        className="form-control"
                        placeholder="Discount Price"
                        value={inputValues.discount_price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Actual Price</label>
                      <input
                        type="number"
                        id="actual_price"
                        name="actual_price"
                        className="form-control"
                        placeholder="Actual Price"
                        value={inputValues.actual_price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label className="form-label">Billing Interval</label>
                      <BillingIntervalOption
                        options={billingIntervalOptions}
                        selectedBillInterval={selectedBillInterval}
                        onSeledBillInterval={setSelectedBillInterval}
                      />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label className="form-label">Type</label>
                      <DealTypes
                        options={dealTypeOptions}
                        selectedType={dealType}
                        onSelectedType={setDealType}
                      />
                    </div>
                    <div className="col-md-12 mt-3">
                      <label className="form-label">Coupon</label>
                      <input
                        type="text"
                        id="coupon_codes"
                        name="coupon_codes"
                        className="form-control"
                        placeholder="Coupon Code"
                        value={inputValues.coupon_codes}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Link</label>
                    <input
                      type="text"
                      id="link"
                      name="link"
                      className="form-control"
                      placeholder="Enter Link"
                      value={inputValues.link}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button
                      type="button"
                      className="btn w-sm btn-light"
                      onClick={onHideModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn w-sm btn-danger"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(initialValues.id);
                      }}
                    >
                      Edit Deal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}
