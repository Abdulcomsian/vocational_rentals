import Image from "next/image";
import Logo from "../../../public/images/logo.svg";
import ProductIcon from "../../../public/images/detail-icon.svg";
import Link from "next/link";

function Signin() {
  return (
    <>
      <div class="container-mini">
        <header class="mt-3">
          <Link href="/">
            <Image src={Logo} alt="" height={50} />
          </Link>
        </header>
        <section class="signup-module">
          <Link href="/" class="back">
            <i class="las la-long-arrow-alt-left"></i>
            <span>Back</span>
          </Link>
          <h3 class="title">Sign Up</h3>
          <form>
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="You name"
              />
            </div>
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="You email"
              />
            </div>
            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <div class="pass-view">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Create password"
                />
                <a href="javascript:void(0)" class="view-pass">
                  <i class="las la-eye"></i>
                </a>
              </div>
            </div>
            <div class="mb-4 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Please confirm that you have read and agree to our{" "}
                <Link href="/term-conditions">terms & conditions</Link> and{" "}
                <Link href="/privacy-policy">privacy policy</Link>
              </label>
            </div>
            <button type="submit" class="btn submit mt-5">
              Sign Up
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Signin;
