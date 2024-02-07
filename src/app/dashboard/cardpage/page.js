import Image from "next/image";
import card from "@/assets/images/card1.png";
import card11 from "@/assets/images/card11.png";
import Link from "next/link";

function Cardpage() {
  return (
    <>
      <section class="search-area">
        <div class="row mx-0">
          <div class="search-box">
            <div class="input-group search-input mb-3">
              <i class="las la-search"></i>
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Search"
              />
              <button
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By : Has Deals
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="cards">
        <div class="row mx-0">
          <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <Link href="/dashboard/carddetails">
              <div class="card">
                <Image src={card} alt="" />
                <div class="card-info">
                  <div class="name-img">
                    <Image src={card11} alt="" />
                    <h3>EasyFast</h3>
                  </div>
                  <div class="type sponsor">Ad</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices enim urna in
                  dolor dignissim ornare ullamcorper.
                </p>
              </div>
            </Link>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <Link href="/dashboard/carddetails">
              <div class="card">
                <Image src={card} alt="" />
                <div class="card-info">
                  <div class="name-img">
                    <Image src={card11} alt="" />
                    <h3>EasyFast</h3>
                  </div>
                  <div class="type new">New</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices enim urna in
                  dolor dignissim ornare ullamcorper.
                </p>
              </div>
            </Link>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <Link href="/dashboard/carddetails">
              <div class="card">
                <Image src={card} alt="" />
                <div class="card-info">
                  <div class="name-img">
                    <Image src={card11} alt="" />
                    <h3>EasyFast</h3>
                  </div>
                  <div class="type new">New</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ultrices enim urna in
                  dolor dignissim ornare ullamcorper.
                </p>
              </div>
            </Link>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12">
            <Link href="/dashboard/carddetails">
              <div class="card">
                <Image src={card} alt="" />
                <div class="card-info">
                  <div class="name-img">
                    <Image src={card11} alt="" />
                    <h3>EasyFast</h3>
                  </div>
                  <div class="type deals">2 Deals</div>
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
