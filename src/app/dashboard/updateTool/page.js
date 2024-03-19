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
  const listingId = query.get("id");
  const isFeatured = query.get("featured");
  const [error, setError] = useState({ formError: "", selectedCategories: "" });

  const [initialValuesData, setInitialValuesData] = useState({});
  const [preSlectedCategories, setPreSlectedCategories] = useState([]);
  // console.log("INIT DATA", initialValuesData.category_ids, "CATEG", catagories);

  useEffect(
    function () {
      // console.log("HERE");
      if (initialValuesData.category_ids === undefined) return;
      const cate = initialValuesData.category_ids.map((id, i) => {
        return catagories.filter((cate) => cate.id === Number(id));
      });

      console.log("PRE-SELECTED", cate.flat());
      setPreSlectedCategories(cate.flat());
    },
    [initialValuesData.category_ids]
  );

  useEffect(
    function () {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${isAuth}`);

      const formdata = new FormData();
      formdata.append("listing_id", listingId);

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
          console.log(result);
        })
        .catch((error) => console.error(error));
    },
    [listingId, isFeatured]
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

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(
        initialValuesData.short_description || ""
      );
    }
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // setInitialValuesData((obj) => ({
        //   ...obj,
        //   short_description: obj.short_description + quill.root.innerHTML,
        // }));
        setCkEditorData(quill.root.innerHTML);
        setInitialValuesData((obj) => ({
          ...obj,
          short_description: quill.root.innerHTML,
        }));
      });
    }
  }, [quill, initialValuesData.short_description]);

  const handleSelectCategory = function (selectedList, selectedItem) {
    const selectedIds = selectedList.map((listItem) => listItem.id);
    setSelectCategories(selectedIds);
  };

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
    // setInitialValuesData(obj => ({...obj, deals: []}))
    const updatedDeals = initialValuesData.deals.map((deal) =>
      deal.id === data.id ? data : deal
    );
    console.log("UPDATED DEALS", updatedDeals);
    setInitialValuesData((obj) => ({ ...obj, deals: updatedDeals }));
    setShowEditDealModal(false);
    console.log("FINAL DATA", data);
  };

  const toggleEditDealModal = function (id) {
    const dataToedit = initialValuesData.deals.find((deal) => deal.id === id);
    console.log("DATA TO EDIT", dataToedit);
    setEditDealData(dataToedit);
    setShowEditDealModal(true);
  };

  const toggleDeleteModal = function (id) {
    setId(id);
    setShowDeleteDealModal(true);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    // setInitialValuesData((obj) => ({
    //   ...obj,
    //   short_description: ckEditorData,
    // }));
    // console.log("INITIAL VALUES", initialValuesData);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${isAuth}`);

    const formdata = new FormData();
    formdata.append("id", listingId);
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
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = function (e) {
    console.log(e.target, e.target.value);
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
                    disablePreSelectedValues={true}
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
