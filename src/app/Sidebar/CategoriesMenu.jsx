import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Accounting from "../../../public/images/categories/accounting.svg";
import all from "../../../public/images/categories/all.svg";
import tour from "../../../public/images/categories/3d.svg";
import Advertising from "../../../public/images/categories/Advertise.svg";
import Booking from "../../../public/images/categories/booking.svg";
import Reservation from "../../../public/images/categories/Central-Reservation.svg";
import Channel from "../../../public/images/categories/Channel-management.svg";
import Chatbot from "../../../public/images/categories/Chatbot.svg";
import Check from "../../../public/images/categories/Check-in-software.svg";
import Certifications from "../../../public/images/categories/Certification.svg";
import Cleaning from "../../../public/images/categories/cleaning-management.svg";
import Communication from "../../../public/images/categories/comunication.svg";
import Consultancy from "../../../public/images/categories/consultancy.svg";
import Copywriting from "../../../public/images/categories/Copywriting.svg";
import CRM from "../../../public/images/categories/CRM.svg";
import Data from "../../../public/images/categories/Data-solution.svg";
import Dynamic from "../../../public/images/categories/Dynamic-pricing.svg";
import Education from "../../../public/images/categories/Education-solution.svg";
import Events from "../../../public/images/categories/Events.svg";
import Floor from "../../../public/images/categories/Floor-plans.svg";
import Guest from "../../../public/images/categories/Guest-comunication.svg";
import Guest_Verification from "../../../public/images/categories/Guest-verfication.svg";
import Home_Automation from "../../../public/images/categories/Home-Automation-1.svg";
import Housekeeping from "../../../public/images/categories/house-keeping.svg";
import Innovative from "../../../public/images/categories/innovative-services.svg";
import Insurance from "../../../public/images/categories/insurance.svg";
import Key_Safes from "../../../public/images/categories/key-safes.svg";
import Lead from "../../../public/images/categories/lead-management.svg";
import Listing from "../../../public/images/categories/listing-sites.svg";
import Marketing from "../../../public/images/categories/marketing.svg";
import Noise from "../../../public/images/categories/fluent_speaker-2-20-regular.svg";
import Other from "../../../public/images/categories/Others.svg";
import Payment from "../../../public/images/categories/payment-processing.svg";
import Payment_Solutions from "../../../public/images/categories/payment-solution.svg";
import Photography from "../../../public/images/categories/photography.svg";
import Property from "../../../public/images/categories/Property-management.svg";
import Referral from "../../../public/images/categories/refferal-network.svg";
import Revenue from "../../../public/images/categories/revenue-management.svg";
import Smart from "../../../public/images/categories/smartlocks.svg";
import Supplies from "../../../public/images/categories/interior-design.svg";
import Travel from "../../../public/images/categories/travel-marketplace.svg";
import Voice from "../../../public/images/categories/voice.svg";
import Website from "../../../public/images/categories/website-building.svg";
import Welcome from "../../../public/images/categories/welcome-apps.svg";
import Wifi from "../../../public/images/categories/wifi-solution.svg";

export default function CategoriesMenu() {
  const pathname = usePathname();
  return (
    <div className="sidebar-menu">
      <ul>
      <li>
          <Link
            href="/"
            className={`link ${
              pathname === "/" ? "active-catagory" : ""
            }`}
          >
            <span
              className="categories"
              style={{ maskImage: `url(${all.src})` }} 
            />
            All
          </Link>
        </li>
        <li>
          <Link
            href="/categories/3d-tour"
            className={`link ${
              pathname === "/categories/3d-tour" ? "active-catagory" : ""
            }`}
          >
            {/* <i className="las la-home"></i> */}
            {/* <Image src={tour} width={16} height={16} alt="" />  */}
            <span
              className="categories"
              style={{ maskImage: `url(${tour.src})` }}
            />
            3D Tours
          </Link>
        </li>
        <li>
          <Link
            href="/categories/accounting"
            className={`link ${
              pathname === "/categories/accounting" ? "active-catagory" : ""
            }`}
          >
            {/*<i className="las la-home"></i>*/}
            {/* <Image src={Accounting} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Accounting.src})` }}
            />
            Accounting
          </Link>
        </li>
        <li>
          <Link
            href="/categories/advertising"
            className={`link ${
              pathname === "/categories/advertising" ? "active-catagory" : ""
            }`}
          >
            {/*<i className="las la-home"></i>*/}
            {/* <Image src={Advertising} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Advertising.src})` }}
            />
            Advertising
          </Link>
        </li>
        <li>
          <Link
            href="/categories/booking-channel"
            className={`link ${
              pathname === "/categories/booking-channel"
                ? "active-catagory"
                : ""
            }`}
          >
            {/* <Image src={Booking} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Booking.src})` }}
            />
            Booking Channel
          </Link>
        </li>
        <li>
          <Link
            href="/categories/central-reservation-system"
            className={`link ${
              pathname === "/categories/central-reservation-system"
                ? "active-catagory"
                : ""
            }`}
          >
            {/* <Image src={Reservation} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Reservation.src})` }}
            />
            Central Reservation System
          </Link>
        </li>
        <li>
          <Link href="/categories/certifications">
            {/* <Image src={Certifications} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Certifications.src})` }}
            />
            Certifications
          </Link>
        </li>

        <li>
          <a href="/categories/channel-management">
            {/* <Image src={Channel} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Channel.src})` }}
            />
            Channel Management
          </a>
        </li>

        <li>
          <a href="/categories/chatbot">
            {/* <Image src={Chatbot} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Chatbot.src})` }}
            />
            Chatbot
          </a>
        </li>

        <li>
          <a href="/categories/check-in-software">
            {/* <Image src={Check} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Check.src})` }}
            />
            Check-in Software
          </a>
        </li>
        <li>
          <a href="/categories/cleaning-management">
            {/* <Image src={Cleaning} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Cleaning.src})` }}
            />
            Cleaning Management
          </a>
        </li>

        <li>
          <a href="/categories/communication">
            {/* <Image src={Communication} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Communication.src})` }}
            />
            Communication
          </a>
        </li>

        <li>
          <a href="/categories/consultancy">
            {/* <Image src={Consultancy} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Consultancy.src})` }}
            />
            Consultancy
          </a>
        </li>

        <li>
          <a href="/categories/copywriting">
            {/* <Image src={Copywriting} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Copywriting.src})` }}
            />
            Copywriting
          </a>
        </li>

        <li>
          <a href="/categories/crm">
            {/* <Image src={CRM} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${CRM.src})` }}
            />
            CRM
          </a>
        </li>

        <li>
          <a href="/categories/data-solutions">
            {/* <Image src={Data} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Data.src})` }}
            />
            Data Solutions
          </a>
        </li>

        <li>
          <a href="/categories/dynamic-pricing">
            {/* <Image src={Dynamic} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Dynamic.src})` }}
            />
            Dynamic Pricing
          </a>
        </li>

        <li>
          <a href="/categories/education-training">
            {/* <Image src={Education} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Education.src})` }}
            />
            Education & Training
          </a>
        </li>

        <li>
          <a href="/categories/events">
            {/* <Image src={Events} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Events.src})` }}
            />
            Events
          </a>
        </li>

        <li>
          <a href="/categories/floor-plans">
            {/* <Image src={Floor} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Floor.src})` }}
            />
            Floor Plans
          </a>
        </li>

        <li>
          <a href="/categories/guest-communication">
            {/* <Image src={Guest} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Guest.src})` }}
            />
            Guest Communication
          </a>
        </li>

        <li>
          <a href="/categories/guest-verification">
            {/* <Image src={Guest_Verification} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Guest_Verification.src})` }}
            />
            Guest Verification
          </a>
        </li>

        <li>
          <a href="/categories/home-automation">
            {/* <Image src={Home_Automation} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Home_Automation.src})` }}
            />
            Home Automation
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Housekeeping} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Housekeeping.src})` }}
            />
            Housekeeping & Maintenance
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Innovative} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Innovative.src})` }}
            />
            Innovative Services
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Insurance} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Insurance.src})` }}
            />
            Insurance
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Key_Safes} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Key_Safes.src})` }}
            />
            Key Safes & Drop Boxes
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Lead} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Lead.src})` }}
            />
            Lead Management
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Listing} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Listing.src})` }}
            />
            Listing Sites
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Marketing} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Marketing.src})` }}
            />
            Marketing Automation
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Noise} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Noise.src})` }}
            />
            Noise Control
          </a>
        </li>

        <li>
          <a href="/categories/advertising">
            {/* <Image src={Other} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Other.src})` }}
            />
            Other
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Payment} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Payment.src})` }}
            />
            Payment Processing
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Payment_Solutions} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Payment_Solutions.src})` }}
            />
            Payment Solutions
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Photography} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Photography.src})` }}
            />
            Photography
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Property} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Property.src})` }}
            />
            Property Management Systems
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Referral} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Referral.src})` }}
            />
            Referral Networks
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Revenue} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Revenue.src})` }}
            />
            Revenue Management
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Smart} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Smart.src})` }}
            />
            Smart Locks & Keyless Entry
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Supplies} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Supplies.src})` }}
            />
            Supplies & Interior Design
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Travel} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Travel.src})` }}
            />
            Travel Marketplace
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Voice} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Voice.src})` }}
            />
            Voice Solutions
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Website} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Website.src})` }}
            />
            Website Building
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Welcome} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Welcome.src})` }}
            />
            Welcome Apps
          </a>
        </li>
        <li>
          <a href="/categories/advertising">
            {/* <Image src={Wifi} width={16} height={16} alt="" /> */}
            <span
              className="categories"
              style={{ maskImage: `url(${Wifi.src})` }}
            />
            Wifi Solutions
          </a>
        </li>
      </ul>
    </div>
  );
}
