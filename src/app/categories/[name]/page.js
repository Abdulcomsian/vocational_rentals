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
import { Dropdown } from "react-bootstrap";

const Post = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasDeals, setHasDeals] = useState(false);
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
      setHasDeals(false);
      setIsLoading(true);
      fetch(
        "https://admin.vacationrentals.tools/api/show-category-listing",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status === 200) {
            setListing(result.listings);
          }
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    },
    [sliceSlug]
  );

  const sortByHasDeals = (a, b) => {
    if (a.has_deals === b.has_deals) {
      return 0;
    } else if (a.has_deals === true) {
      return -1;
    } else {
      return 1;
    }
  };
  let sortedArray;

  if (hasDeals) {
    sortedArray = listing.sort(sortByHasDeals);
  } else if (searchQuery.length > 0) {
    sortedArray = listing.filter((card) =>
      card.company_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else sortedArray = listing;

  console.log("ARRAY", sortedArray);

  return (
    <div>
      <h1 style={{ fontSize: "1.2rem", color: "darkslategray" }}>
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setHasDeals((is) => !is)}>
                    Has Deals
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </section>
      <Spin spinning={isLoading}>
        <section className="cards">
          <div className="row">
            {sortedArray.map((list) => (
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <Link href={`/[companyName]`} as={`/${list.slug}`}>
                  <div className="card">
                    <div className="cardImage-container">
                      {list.screenshot_image !== null && (
                        <Image
                          src={list.screenshot_image}
                          loader={loaderProp}
                          width={100}
                          height={100}
                          layout="responsive"
                          alt=""
                        />
                      )}
                    </div>
                    <div className="card-info">
                      <div className="name-img">
                        {/* <Image src={card11} loader={loaderProp} alt="" /> */}
                        <h3>{list.company_name}</h3>
                      </div>
                      <div className="badges-container">
                        {list.has_deals && (
                          <div className="type sponsor badge--deal">
                            {list.deals?.length} Deals
                          </div>
                        )}
                        {list.plan_type === "Featured" && (
                          <div className="type sponsor">Featured</div>
                        )}
                      </div>
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
