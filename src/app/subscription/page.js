import Image from "next/image";
import ProductImage from "@/assets/images/detail.svg";
import ProductIcon from "@/assets/images/detail-icon.svg";
import Link from "next/link";

function Carddetails() {
  return (
    <>
      <section class="subscribe-pkgs">
        <div class="row">
          <div class="col-md-4">
            <div class="info">
              <h3>Sponsorship Packages</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Velit neque viverra
                risus gravida etiam cursus et imperdiet faucibus. Purus lacinia
                scelerisque morbi habitasse urna non et.
              </p>
            </div>
          </div>
          <div class="packages mt-4">
            <div class="row">
              <div class="col-md-4">
                <div class="package-single">
                  <span class="sale">$5.99</span>
                  <h3>
                    <b>$1</b>/Month
                  </h3>
                  <ul class="mt-4">
                    <li>$1 first month, then $5.99/month.</li>
                  </ul>
                  <div class="action-btn mt-5">
                    <Link href="/signup" class="subscribe-btn">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="package-single color-primary">
                  <h3 class="mt-cs">
                    <b>$59.99</b>/Year
                  </h3>
                  <ul class="mt-4">
                    <li>You Save $10</li>
                  </ul>
                  <div class="action-btn mt-5">
                    <Link href="/signup" class="subscribe-btn">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="package-single">
                  <span class="feature">Featured</span>
                  <h3 class="mt-cs">
                    <b>$59.99</b>/Year
                  </h3>
                  <ul class="mt-4">
                    <li>Lorem ipsum dolor sit amet consectetur. </li>
                  </ul>
                  <div class="action-btn mt-5">
                    <Link href="/signup" class="subscribe-btn">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carddetails;
