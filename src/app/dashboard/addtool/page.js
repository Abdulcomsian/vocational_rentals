"use client";

import { lazy, Suspense } from "react";
import Image from "next/image";
import "quill/dist/quill.snow.css";
import UploadIcon from "../../../../public/images/upload.svg";
import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useEffect } from "react";
import { useCatagories } from "@/contexts/CatagoriesContext";
import { useFormik } from "formik";
import * as yup from "yup";
import AddDealsModal from "./AddDealsModal";
const { useQuill } = require("react-quilljs");
import Deals from "./Deals";
import DealRemoveModal from "./DealRemoveModal";
import EditDealModal from "./EditDealModal";
import { useSearchParams } from "next/navigation";
import { BASE_URL } from "@/constant/utilities";
import { useRouter } from "next/navigation";
import { notification, Spin } from "antd";

function Addtool() {
  const [isAuth, setIsAuth] = useState(function () {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return token ? token : null;
    }
    return null;
  });

  const [showADdNewDealModal, setShowADdNewDealModal] = useState(false);
  const [showDeleteDealModal, setShowDeleteDealModal] = useState(false);
  const [showEditDealModal, setShowEditDealModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(null);
  const { catagories } = useCatagories();
  // useEffect(() => {
  //   require("/src/assets/js/bootstrap.bundle.min.js");
  // }, []);
  const { quill, quillRef } = useQuill();
  const [options, setOptions] = useState([]);
  const [selectedCategories, setSelectCategories] = useState([]);
  const [deals, setDeals] = useState([]);
  const [token, setToken] = useState("");
  const [cards, setCards] = useState([]);
  const [editDealData, setEditDealData] = useState(null);
  const [ckEditorData, setCkEditorData] = useState(null);
  const query = useSearchParams();
  const listingId = query.get("id");
  const isFeatured = query.get("featured");
  const [error, setError] = useState({ formError: "", selectedCategories: "" });

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentLocation = window.location.href;
    }
  }, []);

  useEffect(() => {
    if (!isAuth) {
      router.push("/signin");
    }
  }, [isAuth, router]);

  useEffect(
    function () {
      setOptions(catagories.slice(1));
    },
    [catagories]
  );

  useEffect(
    function () {
      const token = localStorage.getItem("token");
      if (token) setToken(token);
    },
    [token]
  );

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setCkEditorData(quill.root.innerHTML);
      });
    }
  }, [quill]);

  // const handleDuplicate = () => {
  //   const lastKey = cards.length > 0 ? cards[cards.length - 1].key + 1 : 0;
  //   setCards((prevCards) => [
  //     ...prevCards,
  //     <div className="deal-body">
  //       <div className="deal-added">
  //         <div className="left">
  //           <h3>30% off Tella</h3>
  //           <div className="price">
  //             $11 <span className="line-through">$15</span>{" "}
  //             <span>/ Monthly</span>{" "}
  //           </div>
  //           <span className="total-save">Total Save $4</span>
  //         </div>
  //         <div className="right">
  //           <div className="actions">
  //             <a
  //               href="#"
  //               className="text-success"
  //               data-bs-toggle="modal"
  //               data-bs-target="#editlistModal"
  //             >
  //               <i className="las la-pencil-alt"></i>
  //             </a>
  //             <a
  //               href="#"
  //               className="text-danger mx-2"
  //               data-bs-toggle="modal"
  //               data-bs-target="#deletelistModal"
  //             >
  //               <i className="lar la-trash-alt"></i>
  //             </a>
  //           </div>
  //           <a href="#" className="buy-button">
  //             Visit Link
  //           </a>
  //         </div>
  //       </div>
  //     </div>,
  //   ]);
  // };

  const handleSelectCategory = function (selectedList, selectedItem) {
    const selectedIds = selectedList.map((listItem) => listItem.id);
    setSelectCategories(selectedIds);
  };

  const handleSubmitDeal = function (newDeal) {
    setDeals((deals) => [...deals, newDeal]);
  };

  const handleDeleteDeals = function () {
    setShowDeleteDealModal(false);
    setDeals((deals) => deals.filter((deal) => deal.id !== id));
  };

  const handleEdit = function (datatoEdit) {
    console.log(datatoEdit);
  };

  const toggleEditDealModal = function (id) {
    const dataToedit = deals.find((deal) => deal.id === id);
    setEditDealData(dataToedit);
    setShowEditDealModal(true);
  };

  const toggleDeleteModal = function (id) {
    setId(id);
    setShowDeleteDealModal(true);
  };

  const validationSchema = yup.object({
    company_name: yup.string().required("Company name is Required"),
    company_tagline: yup
      .string()
      .max(15, "Field must not exceed 15 characters")
      .required("Company tagline must be required"),
  });

  const formik = useFormik({
    initialValues: {
      company_name: "",
      company_tagline: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setError((error) => ({
        ...error,
        formError: "",
        selectedCategories: "",
      }));
      if (selectedCategories.length === 0) {
        setError((error) => ({
          ...error,
          selectedCategories: "At least one category must be selected",
        }));
        return;
      }
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const formdata = new FormData();
      formdata.append("company_name", values.company_name);
      formdata.append("short_description", ckEditorData);
      formdata.append("company_categories", JSON.stringify(selectedCategories));
      formdata.append("company_tagline", values.company_tagline);
      formdata.append("deals", JSON.stringify(deals));
      formdata.append("id", listingId);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      setIsLoading(true);
      fetch(`${BASE_URL}/api/add-listing`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const convertedData = JSON.parse(result);
          if (convertedData.status === 200) {
            notification.success({ description: convertedData.msg });
            router.push("alllistings");
          }

          if (convertedData.status === 400)
            setError((error) => ({ ...error, formError: convertedData.msg }));

          if (convertedData.status === 401) {
            logout();
            router.push("/signin");
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  return (
    <>
      {isAuth ? (
        <section className="addtool mt-5 mb-5">
          <div className="row">
            <div className="col-md-12 col-sl-12 col-lg-8 col-xl-6 offset-lg-2">
              {error.formError?.length > 0 && (
                <p className="text-danger">{error.formError}</p>
              )}
              <form onSubmit={formik.handleSubmit}>
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
                  {error.selectedCategories && (
                    <p className="errorMessage">{error.selectedCategories}</p>
                  )}
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
                {isFeatured !== "false" && (
                  <div className="deals-sec">
                    <div className="deal-head">
                      <h3>Add Deals</h3>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowADdNewDealModal(true);
                        }}
                      >
                        <i className="las la-plus"></i>Add New Deal
                      </a>
                    </div>
                    <Deals
                      deals={deals}
                      onDeleteDeal={toggleDeleteModal}
                      onEditDeal={toggleEditDealModal}
                    />
                  </div>
                )}
                <Spin spinning={isLoading}>
                  <button type="submit" className="btn btn-submit">
                    Submit
                  </button>
                </Spin>
              </form>
            </div>
          </div>
        </section>
      ) : null}
      <AddDealsModal
        onAddDeal={handleSubmitDeal}
        show={showADdNewDealModal}
        onHideModal={() => setShowADdNewDealModal(false)}
      />
      <DealRemoveModal
        show={showDeleteDealModal}
        onHideModal={() => setShowDeleteDealModal(false)}
        onDeleteDeal={handleDeleteDeals}
      />
      {showEditDealModal && (
        <EditDealModal
          initialValues={editDealData}
          show={showEditDealModal}
          onHideModal={() => setShowEditDealModal(false)}
          handleSubmit={handleEdit}
        />
      )}
    </>
  );
}

export default Addtool;
