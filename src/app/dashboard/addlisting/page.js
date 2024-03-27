"use client";

import Image from "next/image";
import ProductImage from "../../../../public/images/detail.svg";
import ProductIcon from "../../../../public/images/detail-icon.svg";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { usePlans } from "@/contexts/plansContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { Spin } from "antd";
// import second from "@/context/authContext";

function PlanItem({ planData, onSubmitListing, isLoading, selectedPlanId }) {
  console.log("PLAN DATA", planData);
  return (
    <div className="col-md-3">
      <div className="package-single">
        <h3>
          <span className="validity">{planData.plan_name}</span>{" "}
          <b>{`$${planData.discounted_price || planData.recurring_price}`}</b>
          <span className="sale">
            {planData.discounted_price && `$${planData.recurring_price}`}
          </span>
        </h3>
        <ul className="mt-3">
          {planData.plan_type.toLowerCase() === "monthly" ? (
            <li>$1 first month, then ${planData.recurring_price}/month.</li>
          ) : (
            <li>{planData.recurring_price}/Year</li>
          )}
        </ul>
        <div className="action-btn mt-2">
          <Spin
            spinning={planData.plan_id === selectedPlanId ? isLoading : false}
          >
            <Link
              href="#"
              className="subscribe-btn"
              onClick={(event) => onSubmitListing(event, planData.plan_id)}
            >
              Submit Listing
            </Link>
          </Spin>
          <p className="cancel-text">Cancel anytime.</p>
          <Link href="/subscription" className="cancel-text">
            More info
          </Link>
        </div>
      </div>
    </div>
  );
}

function Addlisting() {
  // const { isAuthenticated } = useAuth();
  const [website_link, setwebsite_link] = useState("");
  const [error, setError] = useState("");
  const [showPlans, setShowPlans] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const [isAuth, setIsAuth] = useState(function () {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return token ? token : null;
    }
    return null;
  });

  const { logout } = useAuth();
  const router = useRouter();

  const { plans } = usePlans();

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

  const handleSubmitListing = function (e, price_id) {
    e.preventDefault();

    if (!website_link) {
      setError("Website link must be Required.");
      return;
    }

    setSelectedPlanId(price_id);

    const myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Authorization", `Bearer ${isAuth}`);

    const formdata = new FormData();
    formdata.append("price_id", price_id);
    formdata.append("website_link", website_link);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    setIsLoading(true);
    fetch("https://admin.vacationrentals.tools/api/checkout", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const convertedData = JSON.parse(result);
        if (convertedData.status === 200) {
          router.push(convertedData.redirectURL);
        }
        if (convertedData.status === 401) {
          logout();
          router.push("/signin");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  const validationSchema = yup.object({
    url: yup
      .string()
      .url("Invalid URL format.")
      .required("Website link is Required"),
  });

  const formik = useFormik({
    initialValues: {
      url: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setwebsite_link(values.url);
      setShowPlans(true);
    },
  });

  return (
    <>
      {isAuth ? (
        <>
          <section className="add-link">
            <form
              className="row g-3 justify-content-center"
              action="#"
              onSubmit={formik.handleSubmit}
            >
              <h3 className="submit-tool">Submit your company</h3>
              <div className="col-auto">
                <input
                  type="url"
                  id="url"
                  className="form-control"
                  placeholder="e.g https://airbnb.com"
                  name="url"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.url}
                />
                {formik.touched.url && formik.errors.url ? (
                  <p className="errorMessage">{formik.errors.url}</p>
                ) : null}
              </div>
              <div className="col-auto">
                <button type="submit" className="btn submit-next">
                  Next
                </button>
              </div>
            </form>
          </section>
          {showPlans && (
            <section className="select-package">
              <div className="row">
                <div className="col-md-12">
                  <div className="info">
                    <h3>Select Plan</h3>
                  </div>
                </div>
                <div className="packages mt-4">
                  <div className="row justify-content-center">
                    {plans?.map((plan) => (
                      <PlanItem
                        planData={plan}
                        onSubmitListing={handleSubmitListing}
                        isLoading={isLoading}
                        selectedPlanId={selectedPlanId}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      ) : null}
    </>
  );
}

export default Addlisting;
