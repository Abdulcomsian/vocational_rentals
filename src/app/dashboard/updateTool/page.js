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
  const { quill, quillRef } = useQuill();
  const [options, setOptions] = useState([]);
  const [selectedCategories, setSelectCategories] = useState([]);
  const [deals, setDeals] = useState([]);
  const [token, setToken] = useState("");
  const [cards, setCards] = useState([]);
  const [editDealData, setEditDealData] = useState(null);
  const [ckEditorData, setCkEditorData] = useState(null);
  const query = useSearchParams();
  const slug = query.get("slug");
  const isFeatured = query.get("featured");
  const listing_id = query.get("listingId");
  const [error, setError] = useState({
    formError: "",
    selectedCategories: "",
    tagline_error: "",
  });

  const [initialValuesData, setInitialValuesData] = useState({});
  const [preSlectedCategories, setPreSlectedCategories] = useState([]);

  useEffect(
    function () {
      if (initialValuesData.category_ids === undefined) return;
      const cate = initialValuesData.category_ids.map((id, i) => {
        return catagories.filter((cate) => cate.id === Number(id));
      });

      setPreSlectedCategories(cate.flat());
      setSelectCategories(cate.flat().map((obj) => obj.id));
    },
    [initialValuesData.category_ids]
  );

  useEffect(
    function () {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${isAuth}`);

      const formdata = new FormData();
      formdata.append("slug", slug);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://admin.vacationrentals.tools/api/listing-detail",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setInitialValuesData(result.listingData);
        })
        .catch((error) => console.error(error));
    },
    [slug, isFeatured]
  );

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

  useEffect(
    function () {
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML(
          initialValuesData.short_description || ""
        );
      }
    },
    [quill, initialValuesData.short_description]
  );

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log(quill.root.innerHTML);
        setCkEditorData(quill.root.innerHTML);
        setInitialValuesData((obj) => ({
          ...obj,
          short_description: quill.root.innerHTML,
        }));
      });
    }
  }, [quill]);

  const handleRemoveCategory = function (selectedList, selectedItem) {
    console.log(selectedList, selectedItem);
    const id = selectedItem?.id;
    setSelectCategories((categories) =>
      categories.filter((cate) => cate !== id)
    );
  };

  const handleSelectCategory = function (selectedList, selectedItem) {
    const selectedIds = selectedList.map((listItem) => listItem.id);
    setSelectCategories([...selectedCategories, selectedItem.id]);
  };

  console.log("SELECTED CATEGORY", selectedCategories);

  const handleSubmitDeal = function (newDeal) {
    setInitialValuesData((obj) => ({ ...obj, deals: [...obj.deals, newDeal] }));
    // setDeals((deals) => [...deals, newDeal]);
  };

  const handleDeleteDeals = function () {
    setShowDeleteDealModal(false);
    setInitialValuesData((obj) => ({
      ...obj,
      deals: obj.deals.filter((deal) => deal.id !== id),
    }));
    // setInitialValuesData((deals) => deals.filter((deal) => deal.id !== id));
  };

  const handleEdit = function (data) {
    const updatedData = {
      ...data,
      coupon_code: data.type === "url" ? "" : data.coupon_code,
      link: data.type === "url" ? data.link : "",
    };
    console.log("UPDATED DATA FOR DEAL UPDATE", updatedData);
    const updatedDeals = initialValuesData.deals.map((deal) =>
      deal.id === data.id ? updatedData : deal
    );
    setInitialValuesData((obj) => ({ ...obj, deals: updatedDeals }));
    setShowEditDealModal(false);
  };

  const toggleEditDealModal = function (id) {
    const dataToedit = initialValuesData.deals.find((deal) => deal.id === id);
    setEditDealData(dataToedit);
    setShowEditDealModal(true);
  };

  const toggleDeleteModal = function (id) {
    setId(id);
    setShowDeleteDealModal(true);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    if (initialValuesData.company_name === "") {
      setError((error) => ({
        ...error,
        formError: "Company name must be required",
      }));
      return;
    }
    if (initialValuesData.company_tagline === "") {
      setError((error) => ({
        ...error,
        formError: "Company Tagline must be required",
      }));
      return;
    }

    if (initialValuesData.company_tagline.length > 60) {
      setError((err) => ({
        ...err,
        tagline_error: "Maximum limit for the Company tagline is 60",
      }));
      return;
    }

    if (!preSlectedCategories.length || selectedCategories.length === 0) {
      setError((error) => ({
        ...error,
        formError: "At least one category must be required",
      }));
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${isAuth}`);

    const formdata = new FormData();
    formdata.append("id", listing_id);
    formdata.append("company_name", initialValuesData.company_name);
    formdata.append("short_description", initialValuesData.short_description);
    formdata.append("company_categories", JSON.stringify(selectedCategories));
    formdata.append("company_tagline", initialValuesData.company_tagline);
    formdata.append("deals", JSON.stringify(initialValuesData.deals));

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://admin.vacationrentals.tools/api/update-listing",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          notification.success({ description: result.msg });
          router.push("/dashboard/alllistings");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setError((err) => ({
          ...err,
          tagline_error: "",
          formError: "",
          selectedCategories: "",
        }));
      });
  };

  const handleChange = function (e) {
    setInitialValuesData((intialObj) => ({
      ...intialObj,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {isAuth ? (
        <section className="addtool mt-5 mb-5">
          <div className="row">
            <div className="col-md-12 col-sl-12 col-lg-8 col-xl-6 offset-lg-2">
              {error.formError?.length > 0 && (
                <p className="text-danger">{error.formError}</p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    className="form-control"
                    placeholder="Enter Company Name"
                    value={initialValuesData.company_name}
                    onChange={(e) => handleChange(e)}
                  />
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
                    selectedValues={preSlectedCategories}
                    onRemove={handleRemoveCategory}
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
                    name="company_tagline"
                    value={initialValuesData.company_tagline}
                    onChange={(e) => handleChange(e)}
                  />
                  {error.tagline_error.length > 0 && (
                    <p className="errorMessage">{error.tagline_error}</p>
                  )}
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
                      deals={initialValuesData.deals}
                      onDeleteDeal={toggleDeleteModal}
                      onEditDeal={toggleEditDealModal}
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-submit"
                  disabled={isLoading}
                >
                  {isLoading
                    ? "We are getting your listing ready. Please wait..."
                    : "Submit"}
                </button>
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
