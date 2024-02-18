import Image from "next/image";
import ProductImage from "@/assets/images/detail.svg"
import ProductIcon from "@/assets/images/detail-icon.svg"
function Addlisting() {
  return (
    <>
      <section className="add-link">
        <form className="row g-3 justify-content-center" action="#">
          <h3 className="submit-tool">Submit tool</h3>
          <div className="col-auto">
            <input type="url" className="form-control" placeholder="e.g https://applogocreator.com" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn submit-next">Next</button>
          </div>
        </form>
      </section>
      <section className="select-package">
        <div class="row">
            <div class="col-md-12">
                <div class="info">
                    <h3>
                        Select Plan
                    </h3>
                </div>
            </div>
            <div class="packages mt-4">
                <div class="row justify-content-center">
                    <div class="col-md-3">
                        <div class="package-single">
                            
                            <h3><span className="validity">Monthly</span> <b>$1</b><span class="sale">$5.99</span></h3>
                            <ul class="mt-3">
                                <li>$1 first month, then $5.99/month.</li>
                            </ul>
                            <div class="action-btn mt-2">
                                <a href="#" class="subscribe-btn">Buy</a>
                                <p className="cancel-text">Cancel anytime.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="package-single">
                            <span class="feature">save 15%</span>
                            <h3><span className="validity">Yearly</span> <b>$1</b><span class="sale">$5.99</span></h3>
                            <ul class="mt-3">
                                <li>You save $10. </li>
                            </ul>
                            <div class="action-btn mt-2">
                                <a href="#" class="subscribe-btn">Buy</a>
                                <p className="cancel-text">Cancel anytime.</p>
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

export default Addlisting;