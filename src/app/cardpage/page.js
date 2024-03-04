"use client";
import Image from "next/image";
import card from "../../../public/images/card1.png";
import card11 from "../../../public/images/card11.png";
import Link from "next/link";
import { loaderProp } from "../utilities.js";
// const loaderProp =({ src }) => {
//   return src;
// }
function Cardpage() {
  return (
    <>
      <section className="search-area">
        <div className="row">
          <div className="search-box">
            <div className="input-group search-input mb-3">
              <i className="las la-search"></i>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Search"
              />
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By : Has Deals
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <Link href="/carddetails">
              <div className="card">
                <Image src={card} loader={loaderProp} alt="" />
                <div className="card-info">
                  <div className="name-img">
                    <Image src={card11} loader={loaderProp} alt="" />
                    <h3>EasyFast</h3>
                  </div>
                  <div className="type sponsor">Ad</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices enim urna in
                  dolor dignissim ornare ullamcorper.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <Link href="/carddetails">
              <div className="card">
                <Image src={card} loader={loaderProp} alt="" />
                <div className="card-info">
                  <div className="name-img">
                    <Image src={card11} loader={loaderProp} alt="" />
                    <h3>EasyFast</h3>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices enim urna in
                  dolor dignissim ornare ullamcorper.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <Link href="/carddetails">
              <div className="card">
                <Image src={card} loader={loaderProp} alt="" />
                <div className="card-info">
                  <div className="name-img">
                    <Image src={card11} loader={loaderProp} alt="" />
                    <h3>EasyFast</h3>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices enim urna in
                  dolor dignissim ornare ullamcorper.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <Link href="/carddetails">
              <div className="card">
                <Image src={card} loader={loaderProp} alt="" />
                <div className="card-info">
                  <div className="name-img">
                    <Image src={card11} loader={loaderProp} alt="" />
                    <h3>EasyFast</h3>
                  </div>
                  <div className="type deals">2 Deals</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices enim urna in
                  dolor dignissim ornare ullamcorper.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cardpage;
