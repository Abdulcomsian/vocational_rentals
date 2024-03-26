import { Field, useFormik } from "formik";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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

export default function AddDealsModal({ onAddDeal, show, onHideModal }) {
  const [selectedBillInterval, setSelectedBillInterval] = useState("monthly");
  const [dealType, setDealType] = useState("url");
  const [currency, setCurrency] = useState("USD");

  const handleHideModal = function () {
    onHideModal();
  };

  const formik = useFormik({
    initialValues: {
      deal_name: "",
      discount_price: 0,
      actual_price: 0,
      coupon_code: "",
      link: "",
    },
    onSubmit: (values, { resetForm }) => {
      onAddDeal({
        ...values,
        billing_interval: selectedBillInterval,
        type: dealType,
        currency,
        id: crypto.randomUUID(),
      });
      handleHideModal();
      resetForm();
    },
  });
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
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Deal Name</label>
                    <input
                      type="text"
                      id="deal_name"
                      className="form-control"
                      placeholder="Enter Deal Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.deal_name}
                    />
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label className="form-label">Currency</label>
                      <select
                        id="currency"
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setCurrency(e.target.value)}
                        value={currency}
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
                        className="form-control"
                        placeholder="Discount Price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.discount_price || ""}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Actual Price</label>
                      <input
                        type="number"
                        id="actual_price"
                        className="form-control"
                        placeholder="Actual Price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.actual_price || ""}
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

                    {dealType !== "url" && (
                      <div className="col-md-12 mt-3">
                        <label className="form-label">Coupon</label>
                        <input
                          type="text"
                          id="coupon_code"
                          className="form-control"
                          placeholder="Coupon Code"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.coupon_code}
                        />
                      </div>
                    )}
                  </div>
                  {dealType === "url" && (
                    <div className="mb-3">
                      <label className="form-label">Link</label>
                      <input
                        type="text"
                        id="link"
                        className="form-control"
                        placeholder="Enter Link"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.link}
                      />
                    </div>
                  )}
                  <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button
                      type="button"
                      className="btn w-sm btn-light"
                      onClick={onHideModal}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn w-sm btn-danger">
                      Add Deal
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
