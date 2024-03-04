"use client";
import Image from "next/image";
// import { useQuill } from 'react-quilljs';
import "quill/dist/quill.snow.css";
import UploadIcon from "../../../../public/images/upload.svg";
import DeleteIcon from "../../../../public/images/trash-bin.png";
import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useEffect } from "react";
const { useQuill } = require("react-quilljs");
function Addtool() {
  useEffect(() => {
    require("/src/assets/js/bootstrap.bundle.min.js");
  }, []);
  const { quill, quillRef } = useQuill();
  // window.onload = () => {
  //   var fileupload = document.getElementById("IconUpload");
  //   var imgFileUpload = document.getElementById("imgFileUpload");
  //   upload_icon.onclick = function () {
  //     fileupload.click();
  //   };

  //   IconUpload.addEventListener("change", function () {
  //     const file = this.files[0];

  //     if (file) {
  //       const reader = new FileReader();

  //       reader.onload = function (e) {
  //         imgFileUpload.src = e.target.result;
  //       };

  //       reader.readAsDataURL(file);
  //     } else {
  //       imagePreview.innerHTML = "No image selected";
  //     }
  //   });
  // };
  const [options, setOptions] = useState(['3D Tours', 'Accounting', 'Advertising', 'Booking Channel']);
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
  return (
    <>
      <section className="addtool mt-5 mb-5">
        <div className="row">
          <div className="col-md-12 col-sl-12 col-lg-8 col-xl-6 offset-lg-2">
            <form>
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
                  className="form-control"
                  placeholder="Enter Company Name"
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Company Category</label>
                <Multiselect 
                  isObject= {false}
                  options={options}
                  showCheckbox={true}
                  placeholder="Select Categories"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Tag line</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tag line Here"
                />
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
