import Image from "next/image";
import thanksbg from "../../../public/images/bg-thanks.jpg";
import thanksimg from "../../../public/images/thankyou.png";
import Link from "next/link";

function Contact() {
  return (
    <>
      <section
        className="thankyou"
        style={{ backgroundImage: `url(${thanksbg.src})` }}
      >
        <div className="container">
          <div className="row mx-0">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-md-12 col-lg-10 mr-auto">
                  <div className="thankyou yit-flex-h-center d-flex align-items-center xs-banner-small-space">
                    <div className="tankyou_content">
                      <Image src={thanksimg} alt="" width="584" height="368" />
                      <h3>Registration Successful </h3>
                      <p>
                        We have sent you a verification email. Please verify
                        your Email{" "}
                      </p>
                      <a
                        href="/signin"
                        title="Back to Login"
                        className="btn mt-30"
                      >
                        Back to Login <i className="ti-home"></i>
                      </a>
                    </div>
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

export default Contact;
