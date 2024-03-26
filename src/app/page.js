"use client";
import Cardpage from "./cardpage/page";
import Layout from "./Applayout";
import { AuthProvider } from "@/contexts/AuthContext";
import { Provider } from "react-redux";

import Image from "next/image";
import card from "../../public/images/card1.png";
import { loaderProp } from "./utilities";

import store from "@/store";

import "../store";
import { CatagoriesProvider } from "@/contexts/CatagoriesContext";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";

function Textpage() {
  const [hasDeals, setHasDeals] = useState(false);
  const [listing, setListing] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(function () {
    const formdata = new FormData();
    formdata.append("slug", "");

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
  }, []);

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

  return (
    <>
      <Provider store={store}>
        <CatagoriesProvider>
          <AuthProvider>
            <Layout>
              <div>
                {/* <Cardpage listing={listing} /> */}
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
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            Filter
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => setHasDeals((is) => !is)}
                            >
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
                              <Image src={card} loader={loaderProp} alt="" />
                              <div className="card-info">
                                <div className="name-img">
                                  {/* <Image src={card11} loader={loaderProp} alt="" /> */}
                                  <h3>{list.company_name}</h3>
                                </div>
                                <div className="badges-container">
                                  {list.deals.length > 0 && (
                                    <div className="type sponsor badge--deal">
                                      {list.deals?.length} Deals
                                    </div>
                                  )}
                                  {list?.plan_type === "Featured" && (
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
            </Layout>
          </AuthProvider>
        </CatagoriesProvider>
      </Provider>
    </>
  );
}
export default Textpage;
