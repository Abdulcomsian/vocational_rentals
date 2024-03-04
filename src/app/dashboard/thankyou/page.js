import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <>
    <div className="tankyou_content_dash">
        <h3>Thank you</h3>
        <p>We will approve your listing shortly </p>
        <a href="/dashboard/alllistings" title="Back to Login" className="btn mt-30">View My Listings <i className="ti-home"></i></a>
    </div>
    </>
  );
}

export default Contact;
