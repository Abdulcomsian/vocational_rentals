"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Spin } from "antd";

import { loaderProp } from "../utilities";
import Button from "../components/Button";

function Carddetails() {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();
  const sliceIndex = pathname.lastIndexOf("/");
  const sliceSlug = pathname.slice(sliceIndex + 1);

  const htmlString = details?.short_description;
  const containerRef = useRef(null);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const node = doc.body;

    if (containerRef.current && node) {
      containerRef.current.appendChild(node);
    }
  }, [htmlString]);

  useEffect(
    function () {
      // const myHeaders = new Headers();
      // myHeaders.append("Authorization", `Bearer ${isAuth}`);

      const formdata = new FormData();
      formdata.append("slug", sliceSlug);

      const requestOptions = {
        method: "POST",
        // headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
      setIsLoading(true);
      fetch(
        "https://admin.vacationrentals.tools/api/listing-detail",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setDetails(result.listingData);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    },
    [sliceSlug]
  );

  if (!htmlString) return <Spin spinning={isLoading} fullscreen={true} />;

  console.log("DETAILS", details.deals);

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
                  {/* <div className="type new">New</div> */}
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
                            {deal.type === "url" && (
                              <Link
                                href={`${deal.link}`}
                                className="btn-buy  m-auto"
                              >
                                Buy
                              </Link>
                            )}
                            {deal.type === "code" && (
                              <button
                                style={{ border: "none" }}
                                className="btn-buy  m-auto"
                                disabled={true}
                              >
                                {deal.coupon_code}
                              </button>
                            )}
                            {/* <Link href="#" className="btn-buy  m-auto">
                              {deal.type === "url" ? "Buy" : deal.coupon_code}
                            </Link> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
            {/* <Image src={ProductImage} className="detail-image mb-0" alt="" /> */}
            <div className="tool-detail my-4">
              <div ref={containerRef}></div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tool-img">
              <Image
                src={`${details.screenshot_image}`}
                loader={loaderProp}
                layout="responsive"
                width={100}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carddetails;
