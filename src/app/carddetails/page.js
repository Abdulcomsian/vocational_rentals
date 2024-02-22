import Image from "next/image";
import ProductImage from "@/assets/images/detail.svg";
import ProductIcon from "@/assets/images/detail-icon.svg";
import Link from "next/link";

function Carddetails() {
  return (
    <>
      <section className="detail">
        <div className="row">
          <div className="col-lg-7">
            <div className="tool-detail-top">
              <Image src={ProductIcon} alt="" />
              <div className="other">
                <h1>
                  Universium
                  <div className="type new">New</div>
                </h1>
                <p>
                  Exceptional web & digital design for marketing and SaaS
                  product teams.
                </p>
                <a href="#" className="web-link">
                  Visit Website
                  <i className="las la-arrow-right"></i>
                </a>
              </div>
            </div>
            <section className="select-package">
              <div class="row">
                <div class="row justify-content-center">
                  <div class="col-md-12 d-flex gap-3">
                    <div class="card card--white card-deals text-left">
                      <h3 className="deal-title">Black Friday</h3>
                      <ul class="mt-3 list">
                        <li>
                          $1
                          <span
                            style={{
                              textDecoration: "line-through",
                              marginLeft: "0.6rem",
                            }}
                          >
                            $5.99
                          </span>
                          &nbsp;/&nbsp; month
                        </li>
                      </ul>
                      <small
                        class="d-inline-block mb-3 px-2 py-1  text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill"
                        style={{ width: "fit-content", fontSize: "0.65rem" }}
                      >
                        Added in v5.2.0
                      </small>
                      <div class="action-btn mt-2">
                        <Link
                          href="#"
                          class="btn btn--black btn--round  m-auto"
                        >
                          Buy
                        </Link>
                        {/* <p className="cancel-text">Cancel anytime</p>
                        <Link href="/subscription" className="cancel-text">
                          More info
                        </Link> */}
                      </div>
                    </div>
                    <div class="card card--white card-deals text-left">
                      <h3 className="deal-title">Black Friday</h3>
                      <ul class="mt-3 list">
                        <li>
                          $1
                          <span
                            style={{
                              textDecoration: "line-through",
                              marginLeft: "0.6rem",
                            }}
                          >
                            $5.99
                          </span>
                          &nbsp;/&nbsp; month
                        </li>
                      </ul>
                      <small
                        class="d-inline-block mb-3 px-2 py-1  text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill"
                        style={{ width: "fit-content", fontSize: "0.65rem" }}
                      >
                        Added in v5.2.0
                      </small>
                      <div class="action-btn mt-2">
                        <Link
                          href="#"
                          class="btn btn--black btn--round  m-auto"
                        >
                          Buy
                        </Link>
                        {/* <p className="cancel-text">Cancel anytime</p>
                        <Link href="/subscription" className="cancel-text">
                          More info
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
