import Image from "next/image";
import ProductImage from "../../../public/images/detail-icon.svg";
import ProductIcon from "../../../public/images/detail-icon.svg";
import Logo from "../../../public/images/logo.svg";
import Link from "next/link";

function Signin() {
  return (
    <>
      <div class="container-mini">
        <header class="mt-3">
          <Image src={Logo} alt="" height={50} />
        </header>
        <section class="signin-module">
          <Link href="/" class="back">
            <i class="las la-long-arrow-alt-left"></i>
            <span>Back</span>
          </Link>
          <h3 class="title">Sign In</h3>
          <form>
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
            <div class="mb-4 form-check text-end">
              <label class="form-check-label" for="exampleCheck1">
                <Link href="#">Forgot Password?</Link>
              </label>
            </div>
            <button type="submit" class="btn submit mt-5">
              Sign In
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Signin;
