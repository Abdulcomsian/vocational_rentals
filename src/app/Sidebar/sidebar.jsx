"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo-mini.svg";
import Link from "next/link";

import { usePathname } from "next/navigation";

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
              <a href="/dashboard/cardpage" className="active">
                <i className="las la-home"></i>
                All
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Housekeeping & Maintenance
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Accounting
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Property Management Systems
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                A/B Testing
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Analytics
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Apple Watch
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Artificial Intelligence
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Big Data
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Bots
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Branding
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Browser Extensions
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Building Products
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                CMS
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Careers
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Chatbot
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Chrome Extensions
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Cloud Computing
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Collaboration
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Communities
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Database
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Design
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Developer APIs
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Education
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                All
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Advertising
              </a>
            </li>
            <li>
              <a href="#">
                <i className="las la-home"></i>
                Audio
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
