"use client";
import Image from "next/image";
// import { useQuill } from 'react-quilljs';
import "quill/dist/quill.snow.css";
import UploadIcon from "@/assets/images/upload.svg";

const { useQuill } = require("react-quilljs");
function Addtool() {
  const { quill, quillRef } = useQuill();
  // window.onload = () => {
  //   var fileupload = document.getElementById("IconUpload");
  //   var imgFileUpload = document.getElementById("imgFileUpload");
  //   upload_icon.onclick = function () {
  //     fileupload.click();
  //   };

  //   IconUpload.addEventListener("change", function () {
  //     const file = this.files[0];

  //     if (file) {
  //       const reader = new FileReader();

  //       reader.onload = function (e) {
  //         imgFileUpload.src = e.target.result;
  //       };

  //       reader.readAsDataURL(file);
  //     } else {
  //       imagePreview.innerHTML = "No image selected";
  //     }
  //   });
  // };
  return (
    <>
      <section className="addtool mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-sl-6 col-lg-6 offset-lg-3">
            <form>
              <div className="mb-3 upload-icon" id="upload_icon">
                <Image
                  id="imgFileUpload"
                  src={UploadIcon}
                  alt=""
                  width={80}
                  height={80}
                />
                <span>Upload Company Icon</span>
                <input type="file" id="IconUpload" />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Tool Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Tag line</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tag line Here"
                />
              </div>
              <div className="editor-parent mb-3">
                <label className="form-label">Short Description</label>
                <div ref={quillRef} />
              </div>
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Addtool;
