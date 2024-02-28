import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import ProductIcon from "@/assets/images/detail-icon.svg";
import Link from "next/link";

function Signin() {
  return (
    <>
      <div className="container-mini">
        <header className="mt-3">
          <Link href="/">
            <Image src={Logo} alt="" height={50} />
          </Link>
        </header>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-xl-4 ">
            <section className="signup-module">
            <Link href="/" className="back">
              <i className="las la-long-arrow-alt-left"></i>
              <span>Back</span>
            </Link>
            <h3 className="title">Sign Up</h3>
            <form>
              <div className="mb-4">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="You name"
                />
              </div>
              <div className="mb-4">
                <label for="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="You email"
                />
              </div>
              <div className="mb-4">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <div className="pass-view">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Create password"
                  />
                  <a href="javascript:void(0)" className="view-pass">
                    <i className="las la-eye"></i>
                  </a>
                </div>
              </div>
              <div className="mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Please confirm that you have read and agree to our{" "}
                  <Link href="/term-conditions">terms & conditions</Link> and{" "}
                  <Link href="/privacy-policy">privacy policy</Link>
                </label>
              </div>
              <button type="submit" className="btn submit mt-5">
                Sign Up
              </button>
            </form>
          </section>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Signin;
