"use client";
import Image from "next/image";
import ProductIcon from "../../../../public/images/detail-icon.svg";
import Warning from "../../../../public/images/emergency.png";
import { useQuill } from "react-quilljs";
import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import UploadIcon from "../../../../public/images/upload.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Listing from "./Listing";
import ListingTitle from "./ListingTitle";
import ListingTable from "./ListingTable";
import Modal from "@/app/components/ModalContainer";
import DeleteModal from "@/app/components/DeleteModal";
import { Spin } from "antd";
import { useAuth } from "@/contexts/AuthContext";
import { notification } from "antd";
import Message from "@/app/components/Message";

function Alllistings() {
  const [allListing, setAllListing] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [canclePlanModal, setCancelPlanModal] = useState(false);
  const [error, setError] = useState("");

  const selectedId = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const { logout } = useAuth();

  const [isAuth, setIsAuth] = useState(function () {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return token ? token : null;
    }
    return null;
  });

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

  useEffect(() => {
    require("/src/assets/js/bootstrap.bundle.min.js");
  }, []);

  const { quill, quillRef } = useQuill();

  useEffect(function () {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${isAuth}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    setIsLoading(true);
    fetch(
      "https://admin.vacationrentals.tools/api/show-all-listings",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const convertedData = JSON.parse(result);
        if (convertedData.status === 200) setAllListing(convertedData.listings);
        if (convertedData.status === 401) {
          logout();
          router.push("/signin");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const toggleDeleteModal = function (id) {
    console.log(id);
    selectedId.current = id;
    setShowDeleteModal(true);
  };

  const handleDeleteItem = function () {
    setShowDeleteModal(false);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${isAuth}`);

    const formdata = new FormData();
    formdata.append("listing_id", selectedId.current);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://admin.vacationrentals.tools/api/delete-listing",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === 200) {
          setAllListing((listings) =>
            listings.filter((listing) => listing.id !== selectedId.current)
          );
          notification.success({ description: result.msg });
        }
        if (result.status === 400) {
          notification.error({ description: result.msg });
        }
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  console.log(selectedId.current);

  // if (allListing.length === 0)
  //   return <Message>There are no listing to show</Message>;

  return (
    <>
      {isAuth ? (
        <>
          <Listing>
            <ListingTitle />
            <Spin spinning={isLoading}>
              <ListingTable
                allListing={allListing}
                onDeleteListing={toggleDeleteModal}
              />
            </Spin>
          </Listing>
          {showDeleteModal && (
            <DeleteModal
              show={showDeleteModal}
              onHide={() => setShowDeleteModal(false)}
              handleDeleteItem={handleDeleteItem}
            />
          )}
          <div
            className="modal fade"
            id="cancelModal"
            tabIndex={-1}
            aria-labelledby="cancelModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
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
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Alllistings;
