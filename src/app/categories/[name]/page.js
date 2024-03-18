"use client";
import { usePathname, useRouter } from "next/navigation";
import Cardpage from "@/app/cardpage/page";
import { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import card from "../../../../public/images/card1.png";
import { loaderProp } from "../../utilities";
import { Spin } from "antd";
import { useCatagories } from "@/contexts/CatagoriesContext";

const Post = () => {
  const pathname = usePathname();
  const sliceIndex = pathname.lastIndexOf("/");
  const sliceSlug = pathname.slice(sliceIndex + 1);

  const { catagories } = useCatagories();
  const selectedCatgeoryName = catagories.find(
    (catagory) => catagory.slug === sliceSlug
  );

  const [listing, setListing] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(
    function () {
      const formdata = new FormData();
      formdata.append("slug", sliceSlug);

      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      setIsLoading(true);
      fetch(
        "https://admin.vacationrentals.tools/api/show-category-listing",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 200) {
            console.log(result.listings);
            setListing(result.listings);
          }
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    },
    [sliceSlug]
  );

  return (
    <div>
      <h1 style={{ fontSize: "1.3rem", color: "darkslategray" }}>
        {selectedCatgeoryName?.category_name}
      </h1>
      <section className="search-area">
        <div className="row">
          <div className="search-box">
            <div className="input-group search-input mb-3">
              <i className="las la-search"></i>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Search"
              />
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By : Has Deals
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Has Deals
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Spin spinning={isLoading}>
        <section className="cards">
          <div className="row">
            {listing.map((list) => (
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <Link href={`/carddetails?listingId=${list.id}`}>
                  <div className="card">
                    <Image src={card} loader={loaderProp} alt="" />
                    <div className="card-info">
                      <div className="name-img">
                        {/* <Image src={card11} loader={loaderProp} alt="" /> */}
                        <h3>{list.company_name}</h3>
                      </div>
                      {list.plan.plan_type === "Featured" && (
                        <div className="type sponsor">Featured</div>
                      )}
                    </div>
                    <p>{list.company_tagline}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Spin>
    </div>
  );
};

export default Post;
