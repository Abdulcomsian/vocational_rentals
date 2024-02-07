import Image from "next/image";
import Logo from "@/assets/images/logo.svg"

function Topbar() {
  return (
    <>
      <section class="menu-top">
        <div class="row mx-3">
          <nav class="navbar navbar-expand-lg">
            <div class="top-menu">
              <a href="javascript:void(0)" class="mobile-sidebar-trigger-right">
                <i class="las la-angle-double-right right-icon"></i>
              </a>
              <div class="desc">
                <a class="navbar-brand" href="javascript:void(0)">
                  <Image src={Logo} alt="" />
                </a>
                <p>
                  An exclusive list of the best tools for Vacation Rentals.
                  Carefully vetted and maintained by renters
                </p>
              </div>
              <a href="javascript:void(0)" class="mobile-hamburger">
                <i class="las la-bars hamburger"></i>
              </a>
              <div class="buttons-actions">
                <a href="#">Login</a>
                <a href="#" class="submit-btn">
                  {" "}
                  Submit{" "}
                </a>
                <a href="#" class="subscribe-btn">
                  <i class="lar la-envelope"></i>
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
