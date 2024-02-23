import Image from "next/image";
import ProductImage from "@/assets/images/detail.svg";
import ProductIcon from "@/assets/images/detail-icon.svg";
import Logo from "@/assets/images/logo.svg";
import Link from "next/link";

function Signin() {
  return (
    <>
      <div className="container-mini">
        <header className="mt-3">
          <Image src={Logo} alt="" height={50} />
        </header>
        <section className="signin-module">
          <Link href="/" className="back">
            <i className="las la-long-arrow-alt-left"></i>
            <span>Back</span>
          </Link>
          <h3 className="title">Sign In</h3>
          <form>
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
            <div className="mb-4 form-check text-end">
              <label className="form-check-label" for="exampleCheck1">
                <Link href="#">Forgot Password?</Link>
              </label>
            </div>
            <button type="submit" className="btn submit mt-5">
              Sign In
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Signin;
