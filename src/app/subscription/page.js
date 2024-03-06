"use client";
import Image from "next/image";
import ProductImage from "../../../public/images/detail.svg";
import ProductIcon from "../../../public/images/detail-icon.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/constant/utilities";
import { useAuth } from "@/contexts/AuthContext";
import { usePlans } from "@/contexts/plansContext";

function PlanItem({ planData, isAuthenticated, index }) {
  const description = planData.description
    .split(",")
    .map((desc) => desc.trim());

  return (
    <div className="col-md-4">
      <div className={`package-single ${index === 1 ? "color-primary" : ""}`}>
        {planData.plan_name === "Featured" && (
          <span className="feature">Featured</span>
        )}
        <span
          className="sale"
          style={index === 0 ? {} : { visibility: "hidden" }}
        >
          ${planData.recurring_price}
        </span>
        <h3>
          <b>${planData.actual_price}</b>/
          {planData.plan_name.toLowerCase() === "monthly"
            ? "Monthly"
            : "Yearly"}
        </h3>
        <ul className="mt-4">
          {description.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
        <div className="action-btn mt-5">
          {!isAuthenticated && (
            <Link href="/signup" className="subscribe-btn">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function PlanHeader() {
  return (
    <div className="col-md-4">
      <div className="info">
        <h3>Listings Packages</h3>
        <p>Choose your package</p>
      </div>
    </div>
  );
}

function Carddetails() {
  // const [plans, setPlans] = useState([]);
  const { isAuthenticated } = useAuth();
  const { plans } = usePlans();

  // console.log(isAuthenticated);

  // useEffect(function () {
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("https://admin.vacationrentals.tools/api/plans", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       const convertedData = JSON.parse(result);
  //       setPlans(convertedData.plans);
  //       console.log(convertedData.plans);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <>
      <section className="subscribe-pkgs">
        <div className="row">
          <PlanHeader />
          <div className="packages my-4">
            <div className="row">
              {plans?.map((plan, index) => (
                <PlanItem
                  key={plan.id}
                  planData={plan}
                  isAuthenticated={isAuthenticated}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carddetails;
