"use client";

import Image from "next/image";
import ProductImage from "../../../../public/images/detail.svg";
import ProductIcon from "../../../../public/images/detail-icon.svg";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Addlisting() {
  // const { isAuthenticated } = useAuth();
  const [isAuth, setIsAuth] = useState(function () {
    const token = localStorage.getItem("token");
    return token ? token : null;
  });
  const router = useRouter();

  console.log("IS AUTH", isAuth);
  return (
    <>
      {isAuth ? (
        <>
          <section className="add-link">
            <form className="row g-3 justify-content-center" action="#">
              <h3 className="submit-tool">Submit your company</h3>
              <div className="col-auto">
                <input
                  type="url"
                  className="form-control"
                  placeholder="e.g https://airbnb.com"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn submit-next">
                  Next
                </button>
              </div>
            </form>
          </section>
          <section className="select-package">
            <div className="row">
              <div className="col-md-12">
                <div className="info">
                  <h3>Select Plan</h3>
                </div>
              </div>
              <div className="packages mt-4">
                <div className="row justify-content-center">
                  <div className="col-md-3">
                    <div className="package-single">
                      <h3>
                        <span className="validity">Monthly</span> <b>$1</b>
                        <span className="sale">$5.99</span>
                      </h3>
                      <ul className="mt-3">
                        <li>$1 first month, then $5.99/month.</li>
                      </ul>
                      <div className="action-btn mt-2">
                        <a href="#" className="subscribe-btn">
                          Submit Listing
                        </a>
                        <p className="cancel-text">Cancel anytime.</p>
                        <Link href="/subscription" className="cancel-text">
                          More info
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="package-single">
                      {/* <span className="feature">save 15%</span> */}
                      <h3>
                        <span className="validity">Yearly</span> <b>$59.99</b>
                        {/* <span className="sale">$5.99</span> */}
                      </h3>
                      <ul className="mt-3">
                        <li>You save $10. </li>
                      </ul>
                      <div className="action-btn mt-2">
                        <a href="#" className="subscribe-btn">
                          Submit Listing
                        </a>
                        <p className="cancel-text">Cancel anytime.</p>
                        <Link href="/subscription" className="cancel-text">
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="package-single">
                      <span className="feature">Featured</span>
                      <h3>
                        <span className="validity">Featured </span>{" "}
                        <b>$59.99</b>
                        {/* <span className="sale">$5.99</span> */}
                      </h3>
                      <ul className="mt-3">
                        <li>You save $10. </li>
                      </ul>
                      <div className="action-btn mt-2">
                        <a href="#" className="subscribe-btn">
                          Submit Listing
                        </a>
                        <p className="cancel-text">Cancel anytime.</p>
                        <Link href="/subscription" className="cancel-text">
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
        </>
      ) : (
        router.push("/signin")
      )}
    </>
  );
}

export default Addlisting;
