"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo-mini.svg";
import Link from "next/link";

import { usePathname } from "next/navigation";


import Accounting from "@/assets/images/categories/accounting.svg";
import tour from "@/assets/images/categories/3d.svg";
import Advertising from "@/assets/images/categories/Advertise.svg";
import Booking from "@/assets/images/categories/booking.svg";
import Reservation from "@/assets/images/categories/Central-Reservation.svg";
import Channel from "@/assets/images/categories/Channel-management.svg";
import Chatbot from "@/assets/images/categories/Chatbot.svg";
import Check from "@/assets/images/categories/Check-in-software.svg";
import Certifications from "@/assets/images/categories/Certification.svg";
import Cleaning from "@/assets/images/categories/cleaning-management.svg";
import Communication from "@/assets/images/categories/comunication.svg";
import Consultancy from "@/assets/images/categories/consultancy.svg";
import Copywriting from "@/assets/images/categories/Copywriting.svg";
import CRM from "@/assets/images/categories/CRM.svg";
import Data from "@/assets/images/categories/Data-solution.svg";
import Dynamic from "@/assets/images/categories/Dynamic-pricing.svg";
import Education from "@/assets/images/categories/Education-solution.svg";
import Events from "@/assets/images/categories/Events.svg";
import Floor from "@/assets/images/categories/Floor-plans.svg";
import Guest from "@/assets/images/categories/Guest-comunication.svg";
import Guest_Verification from "@/assets/images/categories/Guest-verfication.svg";
import Home_Automation from "@/assets/images/categories/Home-Automation-1.svg";
import Housekeeping from "@/assets/images/categories/house-keeping.svg";
import Innovative from "@/assets/images/categories/innovative-services.svg";
import Insurance from "@/assets/images/categories/insurance.svg";
import Key_Safes from "@/assets/images/categories/key-safes.svg";
import Lead from "@/assets/images/categories/lead-management.svg";
import Listing from "@/assets/images/categories/listing-sites.svg";
import Marketing from "@/assets/images/categories/marketing.svg";
import Noise from "@/assets/images/categories/fluent_speaker-2-20-regular.svg";
import Other from "@/assets/images/categories/Others.svg";
import Payment from "@/assets/images/categories/payment-processing.svg";
import Payment_Solutions from "@/assets/images/categories/payment-solution.svg";
import Photography from "@/assets/images/categories/photography.svg";
import Property from "@/assets/images/categories/Property-management.svg";
import Referral from "@/assets/images/categories/refferal-network.svg";
import Revenue from "@/assets/images/categories/revenue-management.svg";
import Smart from "@/assets/images/categories/smartlocks.svg";
import Supplies from "@/assets/images/categories/interior-design.svg";
import Travel from "@/assets/images/categories/travel-marketplace.svg";
import Voice from "@/assets/images/categories/voice.svg";
import Website from "@/assets/images/categories/website-building.svg";
import Welcome from "@/assets/images/categories/welcome-apps.svg";
import Wifi from "@/assets/images/categories/wifi-solution.svg";




function Sidebar({ isOpen, onToggleOpen }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <aside style={isOpen ? { left: 0 } : {}}>
        <div className="mini-sidebar">
          <ul className="mt-0 pt-0">
            <li>
              <a href="#" className="close-side">
                <i
                  className="las la-angle-double-left"
                  onClick={() => onToggleOpen((is) => !is)}
                ></i>
              </a>
            </li>
          </ul>
          <div className="logo">
            <Image src={Logo} alt="" />
          </div>
          <ul>
            <li>
              <Link
                href="/"
                className={`link ${pathname === "/" ? "active" : ""}`}
              >
                <i className="las la-home"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`link ${pathname === "/about" ? "active" : ""}`}
              >
                <i className="lar la-star"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/subscription"
                className={`link ${
                  pathname === "/subscription" ? "active" : ""
                }`}
              >
                <i className="las la-tag"></i>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`link ${pathname === "/contact" ? "active" : ""}`}
              >
                <i className="las la-phone"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="/cardpage" className="active">
                {/* <i className="las la-home"></i> */}
            <Image src={tour} width={16} height={16} alt="" />


            3D Tours
              </a>
            </li>
            <li>
              <a href="#">
                {/*<i className="las la-home"></i>*/}
                <Image src={Accounting} width={16} height={16} alt="" />
                Accounting
               

              </a>
            </li>
            <li>
              <a href="#">
                {/*<i className="las la-home"></i>*/}
                <Image src={Advertising} width={16} height={16} alt="" />
                Advertising
               

              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Booking} width={16} height={16} alt="" />
                Booking Channel
               

              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Reservation} width={16} height={16} alt="" />
                Central Reservation System

               

              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Certifications} width={16} height={16} alt="" />
                Certifications

              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Channel} width={16} height={16} alt="" />
                Channel Management
               

              </a>
            </li>
            
            <li>
              <a href="#">
                <Image src={Chatbot} width={16} height={16} alt="" />
                Chatbot

              </a>
            </li>
          
            <li>
              <a href="#">
                <Image src={Check} width={16} height={16} alt="" />
                Check-in Software


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Cleaning} width={16} height={16} alt="" />
                Cleaning Management


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Communication} width={16} height={16} alt="" />
                Communication

              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Consultancy} width={16} height={16} alt="" />
                Consultancy


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Copywriting} width={16} height={16} alt="" />
                Copywriting


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={CRM} width={16} height={16} alt="" />
                CRM


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Data} width={16} height={16} alt="" />
                Data Solutions


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Dynamic} width={16} height={16} alt="" />
                Dynamic Pricing


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Education} width={16} height={16} alt="" />
                Education & Training


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Events} width={16} height={16} alt="" />
                Events


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Floor} width={16} height={16} alt="" />
                Floor Plans


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Guest} width={16} height={16} alt="" />
                Guest Communication


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Guest_Verification} width={16} height={16} alt="" />
                Guest Verification


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Home_Automation} width={16} height={16} alt="" />
                Home Automation


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Housekeeping} width={16} height={16} alt="" />
                Housekeeping & Maintenance


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Innovative} width={16} height={16} alt="" />
                Innovative Services


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Insurance} width={16} height={16} alt="" />
                Insurance


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Key_Safes} width={16} height={16} alt="" />
                Key Safes & Drop Boxes


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Lead} width={16} height={16} alt="" />
                Lead Management


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Listing} width={16} height={16} alt="" />
                Listing Sites


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Marketing} width={16} height={16} alt="" />
                Marketing Automation


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Noise} width={16} height={16} alt="" />
                Noise Control


              </a>
            </li>

            <li>
              <a href="#">
                <Image src={Other} width={16} height={16} alt="" />
              Other


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Payment} width={16} height={16} alt="" />
                Payment Processing


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Payment_Solutions} width={16} height={16} alt="" />
                Payment Solutions


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Photography} width={16} height={16} alt="" />
                Photography


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Property} width={16} height={16} alt="" />
                Property Management Systems


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Referral} width={16} height={16} alt="" />
                Referral Networks


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Revenue} width={16} height={16} alt="" />
                Revenue Management


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Smart} width={16} height={16} alt="" />
                Smart Locks & Keyless Entry


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Supplies} width={16} height={16} alt="" />
                Supplies & Interior Design


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Travel} width={16} height={16} alt="" />
                Travel Marketplace


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Voice} width={16} height={16} alt="" />
                Voice Solutions


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Website} width={16} height={16} alt="" />
                Website Building


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Welcome} width={16} height={16} alt="" />
                Welcome Apps


              </a>
            </li>
            <li>
              <a href="#">
                <Image src={Wifi} width={16} height={16} alt="" />
                Wifi Solutions


              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
