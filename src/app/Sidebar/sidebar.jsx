"use client";

import Image from "next/image";
import Logo from "@/assets/images/logo-mini.svg";
import Link from "next/link";

import { usePathname } from "next/navigation";

import CategoriesMenu from "./CategoriesMenu";

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
        <CategoriesMenu />
      </aside>
    </>
  );
}

export default Sidebar;
