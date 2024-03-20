"use client";
import Image from "next/image";
import card from "../../../public/images/card1.png";
import card11 from "../../../public/images/card11.png";
import Link from "next/link";
import { loaderProp } from "../utilities.js";
import Message from "../components/Message";
// const loaderProp =({ src }) => {
//   return src;
// }

function Cardpage({ listing }) {
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
        <div className="row"></div>
      </section>
    </>
  );
}
export default Cardpage;
