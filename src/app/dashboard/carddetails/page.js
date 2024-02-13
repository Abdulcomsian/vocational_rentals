import Image from "next/image";
import ProductImage from "@/assets/images/detail.svg"
import ProductIcon from "@/assets/images/detail-icon.svg"

function Carddetails() {
  return (
    <>
      <section className="detail">
        <div className="row">
          <div className="col-lg-7">
            <div className="tool-detail-top">
              <Image src={ProductIcon} alt="" />
              <div className="other">
                <h3>
                  Universium
                  <div className="type new">New</div>
                </h3>
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
            <Image
              src={ProductImage}
              className="detail-image mb-0"
              alt=""
            />
            <div className="tool-detail">
              <p>No time to wait for design? You’re at the right place.</p>
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
                We’re a design service provider specializing in
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
