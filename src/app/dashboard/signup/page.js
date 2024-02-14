import Image from "next/image";
import Logo from "@/assets/images/logo.svg"
import ProductIcon from "@/assets/images/detail-icon.svg"

function Signin() {
  return (
    <>
     <div class="container-mini">
        <header class="mt-3">
            <Image src="assets/images/logo.svg" alt="" />
        </header>
        <section class="signup-module">
            <a href="#" class="back">
                <i class="las la-long-arrow-alt-left"></i>
                <span>Back</span>
            </a>
            <h3 class="title">Sign Up</h3>
            <form>
                <div class="mb-4">
                  <label for="exampleInputEmail1" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="You name" />
                </div>
                <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="You email" />
                  </div>
                <div class="mb-4">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <div class="pass-view">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Create password" />
                    <a href="javascript:void(0)" class="view-pass">
                        <i class="las la-eye"></i>
                    </a>
                  </div>
                </div>
                <div class="mb-4 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">
                    Please confirm that you have read and agree to our <a href="#">terms & conditions</a> and <a href="#">privacy policy</a>
                  </label>
                </div>
                <button type="submit" class="btn submit mt-5">Sign Up</button>
            </form>
        </section>
    </div>
    </>
  );
}

export default Signin;
