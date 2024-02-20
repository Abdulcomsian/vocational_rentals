import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";

function Topbar({ onToggleSidebar }) {
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
                <Link className="navbar-brand" href="#">
                  <Image src={Logo} alt="" />
                </Link>
                <p>
                  An exclusive list of the best tools & resources for Vacation
                  Rentals
                </p>
              </div>
              <a
                href="# onClick={e => e.preventDefault()}"
                className="mobile-hamburger"
              >
                <i className="las la-bars hamburger"></i>
              </a>
              <div className="buttons-actions">
                <Link href="/signin">Login</Link>
                <Link href="/signup">Signup</Link>
                <Link href="/dashboard/addlisting" className="submit-btn">
                  {" "}
                  Submit{" "}
                </Link>
                <Link href="https://vrt.beehiiv.com/subscribe" target="_blank" className="subscribe-btn">
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
