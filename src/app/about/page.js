"use client";
import Image from "next/image";
import ProductImage from "../../../public/images/detail.svg";
import ProductIcon from "../../../public/images/detail-icon.svg";
import Accordion from 'react-bootstrap/Accordion';

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

function Aboutus() {
  const { user, isAuthenticated, login, logout } = useAuth();

  const router = useRouter();

  return (
    <>
    {isAuthenticated ? (
        <section className="about">
          <div className="row">
            <div className="col-md-6">
              <div className="info">
                <h3>About us</h3>
                <p>
                The short-term vacation rental business is not as easy as it seems. My name is Peter Fischer, when I stepped into the STR industry, I struggled so hard to find out the tools and services required in it.
                </p>
                <div className="detail mt-4">
                  <p>
                    Listing my properties on different listing sites, maintenance of the property, check-in software, ... These all took a lot of time, and seriously, I’d not had much time.
                  </p>
                  <p>
                    That time I can’t even explain in words how stressful it was.
                  </p>
                  <p>
                    But after years of experience and continuous struggle, I’ve been able to gather all the tools and service providers on one platform.
                  </p>
                  <p>
                    Because I have an aim in mind, the effort I put in and the struggle I suffer with, would not happen with new or existing rental business entrepreneurs.
                  </p>
                  <p>
                    So, I opened it for all the property owners entering the short-term rental business. And believe me it is extreme value stuff for you...
                  </p>
                  <p>
                    Because it has ALL THE TOOLS AND SERVICES YOU NEED in one place to hostyour Airbnb ...
                  </p>
                  <ul>
                    <li>
                      Channel managers
                    </li>
                    <li>
                      Listing Sites
                    </li>
                    <li>
                      Check-in software
                    </li>
                    <li>
                      Dynamic pricing
                    </li>
                    <li>
                      Education & Training
                    </li>
                    <li>
                      Guest communications
                    </li>
                    <li>
                      And 31+ more services and tools you can’t miss.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info">
                <h3>FAQ</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur. Velit neque viverra
                  risus gravida etiam cursus et imperdiet faucibus. Purus
                  lacinia scelerisque morbi habitasse urna non et.
                </p> */}
                <div className="faqs mt-4">
                  <h3>Questions</h3>
                  {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>What is VacationRentals.tools?</Accordion.Header>
                      <Accordion.Body>
                      VacationRentals.toos is a directory of tools & resources for the vacation rental industry
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>How do I submit my website or business to the directory? </Accordion.Header>
                      <Accordion.Body>
                      To submit your business to the directory, you will need to click on the submit link on the menu. You will need to create an account first.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>How do I search for a specific website or business in the directory? </Accordion.Header>
                      <Accordion.Body>
                      You can search for a specific website or business in the directory by using the search bar or categories menu provided on the site.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>How do I update my listing in the directory? </Accordion.Header>
                      <Accordion.Body>
                        You will need to login into your account to edit your listing.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>How do I report a problem with a listing in the directory? </Accordion.Header>
                      <Accordion.Body>
                      To report a problem with a listing in the directory, you will need to follow the instructions provided by the directory site. This may involve <a href="/contact">contacting us</a> directly to report the issue.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>What are deals?</Accordion.Header>
                      <Accordion.Body>
                      Deals are special discounts that providers may have. We have a special search function that allows you to filter providers offering deals.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
=======
        </section>
        ) : (
        router.push("/signin")
      )}
>>>>>>> 95bf1de003504f6cd42436b743f5db20b6e7630c
    </>
  );
}

export default Aboutus;
