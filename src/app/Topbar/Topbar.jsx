import Image from "next/image";
import Logo from "@/assets/images/logo.svg"

function Topbar() {
  return (
    <>
      <section className="menu-top">
        <div className="row mx-0">
          <nav className="navbar navbar-expand-lg">
            <div className="top-menu">
              <a href="#" className="mobile-sidebar-trigger-right">
                <i className="las la-angle-double-right right-icon"></i>
              </a>
              <div className="desc">
                <a className="navbar-brand" href="#">
                  <Image src={Logo} alt="" />
                </a>
                <p>
                  An exclusive list of the best tools & resources for Vacation Rentals
                </p>
              </div>
              <a href="# onClick={e => e.preventDefault()}" className="mobile-hamburger">
                <i className="las la-bars hamburger"></i>
              </a>
              <div className="buttons-actions">
                <a href="#">Login</a>
                <a href="#" className="submit-btn">
                  {" "}
                  Submit{" "}
                </a>
                <a href="#" className="subscribe-btn">
                  <i className="lar la-envelope"></i>
                  Subscribe
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
export default Topbar;
