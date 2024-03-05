"use client";
import Image from "next/image";
import ProductImage from "../../../public/images/detail.svg";
import ProductIcon from "../../../public/images/detail-icon.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/constant/utilities";
import { useAuth } from "@/contexts/AuthContext";

function PlanItem({ planData, isAuthenticated, index }) {
  console.log(planData);
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
          $5.99
        </span>
        <h3>
          <b>${planData.price}</b>/Month
        </h3>
        <ul className="mt-4">
          <li>{planData.description}</li>
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

function Carddetails() {
  const [plans, setPlans] = useState([]);
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  useEffect(function () {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://admin.vacationrentals.tools/api/plans", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const convertedData = JSON.parse(result);
        setPlans(convertedData.plans);
        console.log(convertedData.plans);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section className="subscribe-pkgs">
        <div className="row">
          <div className="col-md-4">
            <div className="info">
              <h3>Sponsorship Packages</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Velit neque viverra
                risus gravida etiam cursus et imperdiet faucibus. Purus lacinia
                scelerisque morbi habitasse urna non et.
              </p>
            </div>
          </div>
          <div className="packages mt-4">
            <div className="row">
              {plans.map((plan, index) => (
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
