"use client";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Link from "next/link";
// import { useState } from "react";

import { loaderProp } from "../utilities.js";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
// const loaderProp =({ src }) => {
//   return src;
// }
function Topbar({ loginSection, setLoginSection, onToggleSidebar }) {
  const router = useRouter();

  const { logout, isAuthenticated } = useAuth();

  const handleLogout = function () {
    logout();
    router("/login");
  };

  return (
    <>
      <section className="menu-top">
        <div className="row mx-0">
          <nav className="navbar navbar-expand-lg">
            <div className="top-menu">
              <Link
                href="#"
                className="mobile-sidebar-trigger-right"
                onClick={onToggleSidebar}
              >
                <i className="las la-angle-double-right right-icon"></i>
              </Link>
              <div className="desc">
                <Link className="navbar-brand" href="/">
                  <Image src={Logo} alt="" />
                </Link>
                <p>
                  An exclusive list of the best tools & resources for Vacation
                  Rentals
                </p>
              </div>
              <a
                href="#"
                className="mobile-hamburger"
                onClick={(e) => {
                  e.preventDefault();
                  setLoginSection();
                }}
              >
                <i className="las la-bars hamburger"></i>
              </a>
              <div
                className={`buttons-actions ${loginSection ? "isOpen" : ""}`}
              >
                {isAuthenticated && (
                  <Link href="/dashboard/addlisting">Submit</Link>
                )}

                <Link href="/signup">
                  {isAuthenticated ? "My Listing" : "Signup"}
                </Link>
                <Link
                  href="/signin"
                  onClick={handleLogout}
                  className="submit-btn"
                >
                  {isAuthenticated ? "Logout" : "Login"}
                </Link>
                <Link
                  href="https://vrt.beehiiv.com/subscribe"
                  target="_blank"
                  className="subscribe-btn"
                >
                  <i className="lar la-envelope"></i>
                  Subscribe
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
export default Topbar;
