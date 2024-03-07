"use client";
import Image from "next/image";
// import { useQuill } from 'react-quilljs';
import "quill/dist/quill.snow.css";
import UploadIcon from "../../../../public/images/upload.svg";
import DeleteIcon from "../../../../public/images/trash-bin.png";
import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useEffect } from "react";
import { useCatagories } from "@/contexts/CatagoriesContext";
import { useFormik } from "formik";
import * as yup from "yup";
const { useQuill } = require("react-quilljs");

function Addtool() {
  const { catagories } = useCatagories();
  useEffect(() => {
    require("/src/assets/js/bootstrap.bundle.min.js");
  }, []);
  const { quill, quillRef } = useQuill();
  const [options, setOptions] = useState([]);
  const [selectedCategories, setSelectCategories] = useState([]);

  useEffect(
    function () {
      setOptions(catagories.slice(1));
    },
    [catagories]
  );
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log("Text change!");
        console.log("Text", quill.getText()); // Get text only
        console.log("Delta Content", quill.getContents()); // Get delta contents
        console.log("Inner HTML", quill.root.innerHTML); // Get innerHTML using quill
        console.log(
          "First child InnerHTML",
          quillRef.current.firstChild.innerHTML
        ); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  const [cards, setCards] = useState([
    <div className="deal-body">
      <div className="deal-added">
        <div className="left">
          <h3>30% off Tella</h3>
          <div className="price">
            $11 <span className="line-through">$15</span> <span>/ Monthly</span>{" "}
          </div>
          <span className="total-save">Total Save $4</span>
        </div>
        <div className="right">
          <div className="actions">
            <a
              href="#"
              className="text-success"
              data-bs-toggle="modal"
              data-bs-target="#editlistModal"
            >
              <i className="las la-pencil-alt"></i>
            </a>
            <a
              href="#"
              className="text-danger mx-2"
              data-bs-toggle="modal"
              data-bs-target="#deletelistModal"
            >
              <i className="lar la-trash-alt"></i>
            </a>
          </div>
          <a href="#" className="buy-button">
            Visit Link
          </a>
        </div>
      </div>
    </div>,
  ]);

  const handleDuplicate = () => {
    const lastKey = cards.length > 0 ? cards[cards.length - 1].key + 1 : 0;
    // setCards(prevCards => [...prevCards, <div key={lastKey} className="card">Duplicated Card Content</div>]);
    setCards((prevCards) => [
      ...prevCards,
      <div className="deal-body">
        <div className="deal-added">
          <div className="left">
            <h3>30% off Tella</h3>
            <div className="price">
              $11 <span className="line-through">$15</span>{" "}
              <span>/ Monthly</span>{" "}
            </div>
            <span className="total-save">Total Save $4</span>
          </div>
          <div className="right">
            <div className="actions">
              <a
                href="#"
                className="text-success"
                data-bs-toggle="modal"
                data-bs-target="#editlistModal"
              >
                <i className="las la-pencil-alt"></i>
              </a>
              <a
                href="#"
                className="text-danger mx-2"
                data-bs-toggle="modal"
                data-bs-target="#deletelistModal"
              >
                <i className="lar la-trash-alt"></i>
              </a>
            </div>
            <a href="#" className="buy-button">
              Visit Link
            </a>
          </div>
        </div>
      </div>,
    ]);
  };

  const handleSelectCategory = function (selectedList, selectedItem) {
    const selectedIds = selectedList.map((listItem) => listItem.id);
    setSelectCategories(selectedIds);
  };

  const validationSchema = yup.object({
    company_name: yup.string().required("Company name is Required"),
    company_tagline: yup.string().required("Company tagline must be required"),
  });

  const formik = useFormik({
    initialValues: {
      company_name: "",
      company_tagline: "",
    },
    validationSchema,
    onSubmit: (values) => {},
  });
  return (
    <>
      <section className="addtool mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 col-sl-12 col-lg-8 col-xl-6 offset-lg-2">
            <form onSubmit={formik.handleSubmit}>
              {/* <div className="mb-3 upload-icon" id="upload_icon">
                <Image
                  id="imgFileUpload"
                  src={UploadIcon}
                  alt=""
                  width={80}
                  height={80}
                />
                <span>Upload Company Icon</span>
                <input type="file" id="IconUpload" />
              </div> */}
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  id="company_name"
                  className="form-control"
                  placeholder="Enter Company Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company_name}
                />
                {formik.touched.company_name && formik.errors.company_name ? (
                  <p className="errorMessage">{formik.errors.company_name}</p>
                ) : null}
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Company Category</label>
                <Multiselect
                  isObject={true}
                  options={options}
                  showCheckbox={true}
                  placeholder="Select Categories"
                  displayValue="category_name" // Display category_name in the dropdown
                  valueField="id" // Obtain id when an item is selected
                  onSelect={handleSelectCategory}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Tag line</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tag line Here"
                  id="company_tagline"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.company_tagline}
                />
                {formik.touched.company_tagline &&
                formik.errors.company_tagline ? (
                  <p className="errorMessage">
                    {formik.errors.company_tagline}
                  </p>
                ) : null}
              </div>
              <div className="editor-parent mb-3">
                <label className="form-label">Short Description</label>
                <div ref={quillRef} />
              </div>
              <div className="deals-sec">
                <div className="deal-head">
                  <h3>Add Deals</h3>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#editlistModal"
                  >
                    <i className="las la-plus"></i>Add New Deal
                  </a>
                </div>
                {cards.map((card) => card)}
              </div>
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="editlistModal"
        tabIndex={-1}
        aria-labelledby="editlistModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <section className="editcompany">
                <div className="row">
                  <div className="col-md-12">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Deal Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Deal Name"
                        />
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-4">
                          <label className="form-label">Currency</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Currency</option>
                            <option value="1">$ - USD</option>
                            <option value="2">£ - Pound</option>
                            <option value="3">€ - Euro</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Discount Price</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Discount Price"
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Actual Price</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Actual Price"
                          />
                        </div>
                        <div className="col-md-12 mt-3">
                          <label className="form-label">Billing Interval</label>
                          <div className="intervals">
                            <span>Lifetime</span>
                            <span>Annual</span>
                            <span className="active">Monthly</span>
                            <span>Once</span>
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <label className="form-label">Type</label>
                          <div className="intervals">
                            <span>Url</span>
                            <span className="active">Code</span>
                          </div>
                        </div>
                        <div className="col-md-12 mt-3">
                          <label className="form-label">Coupon</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon Code"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Link</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Link"
                        />
                      </div>
                      <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button
                          type="button"
                          className="btn w-sm btn-light"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn w-sm btn-danger"
                          onClick={handleDuplicate}
                          data-bs-dismiss="modal"
                        >
                          Add Deal
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deletelistModal"
        tabIndex={-1}
        aria-labelledby="deletelistModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
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
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn w-sm btn-danger"
                  id="delete_company"
                >
                  Yes, Delete It!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtool;
