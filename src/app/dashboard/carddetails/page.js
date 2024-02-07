import Image from "next/image";

function Carddetails() {
  return (
    <>
      <section class="detail">
        <div class="row">
          <div class="col-lg-7">
            <div class="tool-detail-top">
              {/* <Image src="assets/images/detail-icon.svg" alt="" /> */}
              <div class="other">
                <h3>
                  Universium
                  <div class="type new">New</div>
                </h3>
                <p>
                  Exceptional web & digital design for marketing and SaaS
                  product teams.
                </p>
                <a href="#" class="web-link">
                  Visit Website
                  <i class="las la-arrow-right"></i>
                </a>
              </div>
            </div>
            {/* <Image
              src="assets/images/detail.svg"
              class="detail-image mt-5 mb-2"
              alt=""
            /> */}
            <div class="tool-detail">
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
          <div class="col-lg-5">
            <div class="tool-img">
              {/* <Image src="assets/images/detail.svg" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carddetails;
