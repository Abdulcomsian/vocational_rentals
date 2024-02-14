import Image from "next/image";
import ProductImage from "@/assets/images/detail.svg"
import ProductIcon from "@/assets/images/detail-icon.svg"

function Carddetails() {
  return (
    <>
      <section class="contact mt-5 pt-5">
            <div class="row">
                <div class="col-md-12 col-lg-6 offset-lg-3">
                    <h3>
                        Get in Touch
                    </h3>
                    <p>
                        If you have any questions, feedback, or need support, please dont hesitate to reach out.
                    </p>
                    <form class="row g-3">
                        <div class="col-12">
                            <input type="text" class="form-control" id="inputAddress" placeholder="Name" />
                          </div>
                        <div class="col-md-12">
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div class="col-md-12">
                            <textarea name="" class="form-control" placeholder="Message" id="" cols="30" rows="10"></textarea>
                          </div>
                        <div class="col-12">
                            <button type="submit" class="btn submit">SEND</button>
                        </div>
                      </form>
                </div>
            </div>
        </section>
    </>
  );
}

export default Carddetails;
