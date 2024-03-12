"use client";

import Image from "next/image";
import ProductImage from "../../../public/images/detail.svg";
import ProductIcon from "../../../public/images/detail-icon.svg";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

function Carddetails() {
  const [isAuth, setIsAuth] = useState(function () {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return token ? token : null;
    }
    return null;
  });
  const [details, setDetails] = useState({});

  const data = useSearchParams();
  const id = data.get("listingId");

  useEffect(
    function () {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${isAuth}`);

      const formdata = new FormData();
      formdata.append("listing_id", id);

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
          setDetails(result.listingData);
          console.log(result);
        })
        .catch((error) => console.error(error));
    },
    [id]
  );
  return (
    <>
      <section className="detail">
        <div className="row">
          <div className="col-lg-7">
            <div className="tool-detail-top">
              {/* <Image src={ProductIcon} alt="" /> */}
              <div className="other">
                <h1>
                  {details.company_name}
                  <div className="type new">New</div>
                </h1>
                <p>{details.company_tagline}</p>
                <Link
                  href={`${details.company_link}`}
                  target="_blank"
                  className="web-link"
                >
                  Visit Website
                  <i className="las la-arrow-right"></i>
                </Link>
              </div>
            </div>
            {details.deals?.length > 0 && (
              <section className="select-package with-bg">
                <h3 className="deal-title-main">Deals</h3>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="carousal-deal">
                      {details.deals.map((deal) => (
                        <div
                          className="card card--white card-deals text-left"
                          key={deal.id}
                        >
                          <h3 className="deal-title">{deal.deal_name}</h3>
                          <ul className="mt-3 list">
                            <li>
                              ${deal.discount_price}
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  marginLeft: "0.4rem",
                                }}
                              >
                                ${deal.actual_price}
                              </span>
                              &nbsp;/&nbsp; {deal.billing_interval}
                            </li>
                          </ul>
                          <small
                            className="d-inline-block mb-3 px-2 py-1  text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill"
                            style={{
                              width: "fit-content",
                              fontSize: "0.65rem",
                            }}
                          >
                            You Save $
                            {Number(deal.actual_price) -
                              Number(deal.discount_price)}
                          </small>
                          <div className="action-btn mt-2">
                            <Link href="#" className="btn-buy  m-auto">
                              Buy
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
            <Image src={ProductImage} className="detail-image mb-0" alt="" />
            <div className="tool-detail">
              <p>No time to wait for design? You are at the right place.</p>
              <p>
                <b>With us, you can expect:</b>
              </p>
              <ol>
                <li>
                  48-hour guaranteed delivery (larger tasks are broken down into
                  smaller ones);
                </li>
                <li>Flat monthly tiers, for any team size;</li>
                <li>No long-term commitments, pause/cancel anytime;</li>
                <li>Unlimited design requests;</li>
                <li>
                  Dedicated creative director and designer, no team swapping;
                </li>
                <li>
                  Only senior-level experts; our team worked at/with
                  Google/Amazon/Credit Suisse/Uber/Cisco.
                </li>
                <li>Get started within 12 hours.</li>
              </ol>
              <p>
                We are a design service provider specializing in
                subscription-based offerings for a flat monthly fee, targeting
                clients who seek exceptional user experiences without the hassle
                of expensive agencies and hourly freelance jobs.
              </p>
              <p>
                Our services eliminate the need for long-term commitments,
                making them accessible and flexible for different business
                needs.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tool-img">
              <Image src={ProductImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carddetails;
