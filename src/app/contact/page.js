import Image from "next/image";
import ProductImage from "@/assets/images/detail.svg";
import ProductIcon from "@/assets/images/detail-icon.svg";
import Link from "next/link";

function Contact() {
  return (
    <>
      <section className="contact mt-5 pt-5">
        <div className="row mx-0">
          <div className="col-md-12 col-lg-4 offset-lg-4">
            <Link href="/" className="back">
              <i className="las la-long-arrow-alt-left"></i>
              <span>Back</span>
            </Link>
            <h3>Get in Touch</h3>
            <p>
              If you have any questions, feedback, or need support, please dont
              hesitate to reach out.
            </p>
            <form className="row g-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  name=""
                  className="form-control"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn submit">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
