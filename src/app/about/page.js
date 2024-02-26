import Image from "next/image";
import ProductImage from "../../../public/images/detail.svg"
import ProductIcon from "../../../public/images/detail-icon.svg"

function Aboutus() {
  return (
    <>
      <section className="about">
            <div className="row">
                <div className="col-md-6">
                    <div className="info">
                        <h3>
                            About
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Velit neque viverra risus gravida etiam cursus et imperdiet faucibus. Purus lacinia scelerisque morbi habitasse urna non et.
                        </p>
                        <div className="detail mt-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur. In risus odio morbi non. Sit pulvinar et at dignissim aliquam turpis. Ac semper commodo gravida proin purus orci suspendisse viverra erat. At fermentum facilisis iaculis auctor amet dui curabitur. Mauris suscipit quis enim augue dignissim aliquet. Id sed orci risus in penatibus ullamcorper ut. Quis bibendum libero cras volutpat ultricies lectus egestas risus. Ac id pretium nam sem mattis sed arcu velit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="info">
                        <h3>
                            FAQ
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Velit neque viverra risus gravida etiam cursus et imperdiet faucibus. Purus lacinia scelerisque morbi habitasse urna non et.
                        </p>
                        <div className="faqs mt-4">
                            <h3>Questions</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                      Accordion Item #1
                                    </button>
                                  </h2>
                                  <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first items accordion body.</div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                      Accordion Item #2
                                    </button>
                                  </h2>
                                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second items accordion body. Lets imagine this being filled with some actual content.</div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                      Accordion Item #3
                                    </button>
                                  </h2>
                                  <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third items accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
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

export default Aboutus;
